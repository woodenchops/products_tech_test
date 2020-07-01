const express = require('express');
const router = express.Router();
const welcomeControllers = require('../controllers/welcomeController');


router
.route('/')
.get(welcomeControllers.getWelcome);

module.exports = router;