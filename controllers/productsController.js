const Products = require('../models/Products');

exports.getPosts = async (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const maxPrice = parseFloat(req.query.maxPrice);
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const totalDocs = await Products.countDocuments({});

    const results = {};

    results.totalDocuments = {
        total: totalDocs
    };
    
    if(startIndex > 0) {
    
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    
    }
    
    if(endIndex < totalDocs) {
           
        results.next = {
            page: page + 1,
            limit: limit
        };
    
    }

if(maxPrice) {

    await Products.find({price: {$lte: parseFloat(maxPrice)}})
      .then(posts => res.json({metaData: results, payload: posts}))
      .catch(err => res.status(400).json('Err ' + err))

} else {
    try {
        await Products.find({ "stock": { $ne: "0" } }).sort({ price: 1 })
        .skip(startIndex)
        .limit(limit)
        .then(posts => res.json({metaData: results, payload: posts}))
        .catch(err => res.status(400).json('Error:' + err)); 
    } catch (error) {
        console.log(error);
    }

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
