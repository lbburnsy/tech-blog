const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log("homeRoutes working");
})

module.exports = router;