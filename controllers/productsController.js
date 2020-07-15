const Products = require('../models/Products');
const catchAsync = require('../utils/CatchAsync');
const AppError = require('../utils/AppError');

exports.getPosts = catchAsync (async (req, res, next) => {

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
 
      await Products.find({ "stock": { $ne: "0" } }).sort({ price: 1 })
        .skip(startIndex)
        .limit(limit)
        .then(posts => res.json({metaData: results, payload: posts}))
        .catch(err => res.status(400).json('Error:' + err)); 
  

}
    

});

exports.getSingleProduct = catchAsync(async (req, res, next) => {

    const singleProduct = await Products.find({id: req.params.slug})

    if(singleProduct.length <= 0) {
        return next(new AppError(`cant find that product: ${req.params.slug}`, 404));
    }

    await Products.find({id: req.params.slug})
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Err ' + err));
 
     
  });
