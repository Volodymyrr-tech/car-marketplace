const jwt = require('jsonwebtoken')

function requireAuth(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if (!bearerHeader) {
    return res.status(401).json({ message: 'Authentication failed' })
  }
  const bearer = bearerHeader.split(' ')
  const token = bearer[1]

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' })
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret')
    req.userId = decoded.userId // Store user ID for use in route handler
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Authentication failed' })
  }
}

module.exports = requireAuth
