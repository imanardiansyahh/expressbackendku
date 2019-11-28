var express = require('express');
var router = express.Router();


const { logout, register, authentication } = require('./controller')

/* GET home page. */
router.get('/logout', logout)
router.post('/authentication', authentication)
router.post('/register', register)


module.exports = router;