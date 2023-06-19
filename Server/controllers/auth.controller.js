const pool = require('../database/db')
const jwt = require('jsonwebtoken')
const { passwordHasher, comparePasswords } = require('../utils/helper')
class AuthController {
  async logUser(req, res) {
    const { email, password } = req.body
    try {
      const userQuery = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      )
      if (userQuery.rows.length === 0) {
        return res.status(401).send('Invalid credentials')
      }
      const user = userQuery.rows[0]
      const passwordMatch = comparePasswords(password, user.password)
      if (!passwordMatch) {
        return res.status(401).send('Invalid credentials')
      }
      const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {
        expiresIn: '1h',
      })
      console.log(email, password)
      res.status(200).json({ token, userId: user.id })
    } catch (error) {
      console.error(error)
      res.status(500).send('Server error')
    }
  }
  async regUser(req, res) {
    const { name, email, password } = req.body
    try {
      const existingUser = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      )
      if (existingUser.rows.length > 0) {
        return res.status(400).send('User with this email already exists')
      }
      const hashedPassword = passwordHasher(req.body.password)
      await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
        [name, email, hashedPassword]
      )
      console.log(name, email, hashedPassword)
      res.status(201).send('User registered successfully')
    } catch (error) {
      console.error(error)
      res.status(500).send('Server error')
    }
  }
}
module.exports = new AuthController()
