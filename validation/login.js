const Validator = require('validator');
const Is_Empty = require('./IsEmpty');


module.exports = function loginValidation(data) {

    let errors = {};

    data.email = !Is_Empty(data.email) ? data.email : '';
    data.password = !Is_Empty(data.password) ? data.password : '';

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if(!Validator.isLength(data.password, { min : 2, max : 30 })) {
        errors.password = 'Password field must be between 6 and 30 character'
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors,
        isValid : Is_Empty(errors)
    }

};