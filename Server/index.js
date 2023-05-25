const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000
const authRoute = require('./routes/auth.routes')
const carsRoutes = require('./routes/home-cars.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('', authRoute)

//TO CHECK
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.originalUrl}`)
  next()
})

app.use('', carsRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
