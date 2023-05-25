const express = require('express')
const router = express.Router()
const carController = require('../controllers/car.controller')

router.get('/home', carController.getCars)
router.get('/cars', carController.getCars)
router.get('/cars/:name', carController.getCarsById)

module.exports = router
