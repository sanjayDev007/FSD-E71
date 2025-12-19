const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkAuth = require('../middlewares/checkAuth');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/protected',checkAuth, userController.protected);

router.get('/profile',checkAuth, userController.getProfile);

router.put('/update-profile',checkAuth, userController.updateProfile);

module.exports = router;