const router = require('express').Router();
const usercontroller = require('../controllers/userController');

router.get('/', usercontroller.getusers);
router.post('/', usercontroller.addUser);
router.get('/:id', usercontroller.getUserById);
router.put('/:id', usercontroller.updateUser);
router.delete('/:id', usercontroller.deleteUser);

module.exports = router;