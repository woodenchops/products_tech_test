const express = require('express');
const router = express.Router();
const contentsControllers = require('../controllers/contentsController');


router
.route('/')
.get(contentsControllers.getContents);

module.exports = router;