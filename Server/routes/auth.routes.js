const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/login', authController.logUser)

router.post('/register', authController.regUser)

module.exports = router
