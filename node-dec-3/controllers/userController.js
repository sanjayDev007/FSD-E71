const { findUsers, createUser, findUserById, findAndUpdateUser, findAndDeleteUser} = require('../helpers/userHelper');
const getusers = async(req, res) => {
    try {
        let users = await findUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

const addUser = async(req, res) => {
    try {
        const newUser = req.body;
        newUser.id = Date.now().toString();
        const addedUser = await createUser(newUser);
        res.status(201).json(addedUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add user' });
    }
}

const getUserById = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await findUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
}

const updateUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const users = await findAndUpdateUser(userId, updatedData);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await findAndDeleteUser(userId);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
}


module.exports = {
    getusers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
}