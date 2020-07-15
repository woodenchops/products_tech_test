const User = require('../models/userModel');
const catchAsync = require('../utils/CatchAsync');

exports.signup = catchAsync(async (req, res) => {
    const newUser = await User.create(req.body);

       await res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
        
});