const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
        required: [true, 'please confirm your password'],
        validate: {
            // this only works on CREATE and SAVE!!
            validator: function(el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    }
});

UserSchema.pre('save', async function(next) {
 if(!this.isModified('password')) return next();

 this.password = await bcrypt.hash(this.password, 12);

 this.passwordConfirm = undefined;
 next();
});

module.exports = mongoose.model('user', UserSchema);