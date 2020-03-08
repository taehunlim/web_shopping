const Validator = require('validator');
const Is_Empty = require('./IsEmpty');


module.exports = function registerValidation(data) {

    let errors ={};

    data.name = !Is_Empty(data.name) ? data.name : '';
    data.email = !Is_Empty(data.email) ?  data.email : '';
    data.password = !Is_Empty(data.password) ? data.password : '';
    data.password2 = !Is_Empty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name field must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password field must be between 6 and 30 character';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password must match';
    }

    return {
        errors,
        isValid: Is_Empty(errors)
    };
}