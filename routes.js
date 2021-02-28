const express = require('express');
const router = express.Router();
const UserModel = require('./db.js').UserModel;

router.post('/auth', (req, res) => {
    UserModel.findOne({email: req.body.login, password: req.body.pass}).lean().exec((err, user) => {
        if (user) {
            res.status(200).send('Loginned');
        } else {
            res.status(401).send('Unauthorized');
        }
    })
});

router.post('/sign', (req, res) => {
    const userData = {
        username: req.body.name,
        email: req.body.email,
        password: req.body.pass
    }
    UserModel.findOne({email: req.body.email}).lean().exec((err, user) => {
        if (user) {
            res.status(208).send('User alredy exist');
        } else {
            UserModel.create(userData, err => {
                err && console.log(err);
                res.send('SignIn Success');
            });
        }
    })
});

module.exports = router;