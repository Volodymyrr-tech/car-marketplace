const express = require('express')
const router = express.Router()
const carController = require('../controllers/car.controller')
const requireAuth = require('../middlewares/auth.middleware')

router.get('/home', carController.getCars)
router.get('/cars', carController.getCars)
router.post('/cars/:name/booking', requireAuth, carController.bookCar)
router.get('/cars/:name', carController.getCarsById)

module.exports = router
