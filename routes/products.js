const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');


router
.route('/')
.get(productsControllers.getPosts);

router
.route('/:slug')
.get(productsControllers.getSingleProduct);

// router
// .route('/maxPrice')
// .get(productsControllers.getMaxPriceProduct);

module.exports = router;