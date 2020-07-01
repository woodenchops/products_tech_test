const Products = require('../models/Products');

exports.getPosts = async (req, res) => {

    const pagination =  await req.query.pagination ? parseInt(req.query.pagination) : 5;
    const page =  await req.query.page ? parseInt(req.query.page) : 1;
    try {
       await Products.find({ "stock": { $ne: "0" } }).sort({ price: 1 })
        .skip((page - 1) * pagination)
        .limit(pagination)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error:' + err)); 
    } catch (error) {
        console.log(error);
    }

};

exports.getSingleProduct = async (req, res) => {

    try {
    await Products.find({id: req.params.slug})
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Err ' + err))
    } catch (error) {
        console.log(error);
    }
     
  };
