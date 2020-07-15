const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router
.route('/')
.post(authControllers.signup);

module.exports = router;