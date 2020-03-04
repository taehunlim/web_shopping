const express = require('express');
const router = express.Router();


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
                return res.json({
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


module.exports = router;