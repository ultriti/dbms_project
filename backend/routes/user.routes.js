const express = require('express');
const { RegisterUser,LoginUser, getUserProfile } = require('../controllers/user.controller');
const router = express.Router();

router.route('/register').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/getUser').get(getUserProfile)


module.exports = router;


