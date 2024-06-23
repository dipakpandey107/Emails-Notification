const express = require('express');
const { register, login, updateSettings } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/register', register); // Register route
router.post('/login', login); // Login route
router.put('/settings', authenticate, updateSettings); // Settings route, protected

module.exports = router;
