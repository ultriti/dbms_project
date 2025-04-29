const express = require('express');
const { RegisterUser,LoginUser, getUserProfile, editUserProfile } = require('../controllers/user.controller');
const router = express.Router();

router.route('/register').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/getUser').get(getUserProfile).put(editUserProfile)


module.exports = router;


