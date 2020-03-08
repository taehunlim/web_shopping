const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userModel = require('../model/user');


// @route   POST api/user/signup
// @desc    user register
// @access  public
router.post('/signup', (req, res) => {

    const {name, email, password} = req.body;

    userModel
        .findOne({email})
        .exec()
        .then(user => {
            if(user) {
                return res.status(500).json({
                    msg : "the email already exist"
                });
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

    const {name, email, password} = req.body;

    userModel
        .findOne({email})
        .exec()
        .then(user => {
            if(!user) {
                return res.status(500).json({
                    msg : "the email dose not exist"
                });
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
                            res.status(500).json({
                                msg : "password incorrect"
                            });
                        }
                    })
                    .catch(err => res.json(err));
            }
        })
        .catch(err => console.log(err));
})


module.exports = router;