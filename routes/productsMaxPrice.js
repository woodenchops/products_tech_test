const express = require('express');
const router = express.Router();
const maxPriceControllers = require('../controllers/maxPriceControllers');


router
.route('/:price')
.get(maxPriceControllers.getMaxPrice);


module.exports = router;