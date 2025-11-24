const db = require('../helpers/db');
exports.getAllUsers = (req, res) => {
    const users = db.users.getAll();
    res.send(users);
}

exports.createUser = (req, res) => {
    const newUser = req.body;
    db.users.add(newUser);
    res.send({ message: 'User added successfully' });
}

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const user = db.users.findById(userId);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
}

exports.deleteUserById = (req, res) => {
    const userId = req.params.id;
    db.users.deleteById(userId);
    res.send({ message: 'User deleted successfully' });
}

exports.updateUserById = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    db.users.updateById(userId, updatedUser);
    res.send({ message: 'User updated successfully' });
}