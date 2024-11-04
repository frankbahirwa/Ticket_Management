const express = require('express');
const auth = require('../controller/authController')
const authenticateToken = require('../middleware/authMiddleware'); 
const controller = require('../controller/controller')
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/home', authenticateToken , Home);

module.exports = router;
