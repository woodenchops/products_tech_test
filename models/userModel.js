const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please confirm your password']
    }
});

module.exports = mongoose.model('user', UserSchema);