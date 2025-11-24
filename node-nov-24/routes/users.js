const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users');

router.get('/', controllers.getAllUsers);
router.post('/', controllers.createUser);
router.get('/:id', controllers.getUserById);
router.delete('/:id', controllers.deleteUserById);
router.put('/:id', controllers.updateUserById);

module.exports = router;