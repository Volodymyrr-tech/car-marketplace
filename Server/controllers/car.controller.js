const pool = require('../database/db')

exports.getCars = async (req, res) => {
  try {
    const allCars = await pool.query('SELECT * FROM cars')
    res.json(allCars.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
exports.getCarsById = async (req, res) => {
  const carName = req.params.name
  try {
    const car = await pool.query('SELECT * FROM cars WHERE carName = $1', [
      carName,
    ])
    res.json(car.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
