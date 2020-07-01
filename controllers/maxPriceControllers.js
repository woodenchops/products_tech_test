const Products = require('../models/Products');

exports.getMaxPrice = (req, res) => {
      Products.find({price: {$lte: parseFloat(req.params.price)}})
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Err ' + err))

  };