const express = require('express');
const { create_post, getAllPosts, getUserPosts } = require('../controllers/post.controller');
const router = express.Router();

router.route('/creatPost').post(create_post)
router.route('/getAllPosts').get(getAllPosts)
router.route('/getUserPosts').get(getUserPosts)

module.exports = router;


