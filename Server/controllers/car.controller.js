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
exports.bookCar = async (req, res) => {
  const {
    carName,
    userId,
    firstName,
    lastName,
    phoneNumber,
    date,
    comment,
    fromAddress,
    toAddress,
  } = req.body
  console.log(req.body)
  try {
    const carQuery = await pool.query('SELECT * FROM Cars WHERE carname = $1', [
      carName,
    ])
    if (carQuery.rows.length === 0) {
      return res.status(404).send('Car not found')
    }
    const carId = carQuery.rows[0].id
    await pool.query(
      `
      INSERT INTO Orders (user_id, car_id, first_name, last_name, from_address, to_address, phone_number, date, comment) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
      [
        userId,
        carId,
        firstName,
        lastName,
        fromAddress,
        toAddress,
        phoneNumber,
        date,
        comment,
      ]
    )
    res.status(200).send('Order successfully created')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
