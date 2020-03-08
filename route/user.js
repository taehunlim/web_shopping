const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userModel = require('../model/user');
const registerValidation = require('../validation/register');
const loginValidation = require('../validation/login');


// @route   POST api/user/signup
// @desc    user register
// @access  public
router.post('/signup', (req, res) => {

    const {errors, isValid} = registerValidation(req.body);

    const {name, email, password} = req.body;

    if(!isValid) {
        return res.status(400).json(errors);
    }

    userModel
        .findOne({email})
        .exec()
        .then(user => {
            if(user) {
                errors.email = "the email already exist"
                return res.status(500).json(errors)
            }
            else {
                const newUser = new userModel({
                    name, email, password
                });

                newUser
                    .save()
                    .then(user => {
                        res.json({
                            msg : "successful registered newUser",
                            userInfo : user
                        });
                    })
                    .catch(err => console.log(err));
            }
        });
});


// @route   POST api/user/login
// @desc    user login
// @access  public
router.post('/login', (req, res) => {

    const {errors, isValid} = loginValidation(req.body);

    const {name, email, password} = req.body;

    if(!isValid) {
        return res.status(400).json(errors);
    }

    userModel
        .findOne({email})
        .exec()
        .then(user => {
            if(!user) {
                errors.email = 'the email dose not exist'
                return res.status(500).json(errors);
            }
            else {
                bcrypt
                    .compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {id : user._id, name : user.name};
                            jwt.sign(
                                payload,
                                "asd123",
                                {expiresIn: 9999},
                                (err, token) => {
                                    res.status(200).json({
                                        success : true,
                                        msg : "bearer " + token
                                    });
                                });
                        }
                        else {
                            errors.password = 'The password incorrect';
                            res.status(500).json(errors);
                        }
                    })
                    .catch(err => res.json(err));
            }
        })
        .catch(err => console.log(err));
})


module.exports = router;