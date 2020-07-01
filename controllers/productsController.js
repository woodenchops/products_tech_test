const Products = require('../models/Products');
const { count } = require('../models/Products');

exports.getPosts = async (req, res) => {

    const pagination =  await req.query.pagination ? parseInt(req.query.pagination) : 5;
    const page =  await req.query.page ? parseInt(req.query.page) : 1;
    try {
    let totalCollectionCount = await Products.find().count();
       await Products.find({ "stock": { $ne: "0" } }).sort({ price: 1 })
        .skip((page - 1) * pagination)
        .limit(pagination)
        // .then(posts => res.json([{posts, len: totalCollectionCount}]))
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

  exports.getMaxPriceProduct = (req, res) => {

    // Products.find({price: {$lt: parseInt(req.params.maxPrice)}})
    //   .then(post => res.json(post))
    //   .catch(err => res.status(400).json('Err ' + err))

    res.status(200).json({msg: 'hello from max price', slug: req.params})
     
  };