const User = require('../models/User');
exports.findUsers = async function() {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw new Error('Failed to fetch users');
    }
}

exports.findUserById = async function(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw new Error('Failed to fetch user by ID');
    }
}

exports.createUser = async function(user) {
    try {
        const addedUser = await User.create(user);
        return addedUser;
    }
    catch (err) {
        console.log(err);
        throw new Error('Failed to add user');
    }
}

exports.findAndUpdateUser = async function(id, updatedData) {
    try {
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (user) {
            return user;
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Failed to update user');
    }
}

exports.findAndDeleteUser = async function(id) {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (deletedUser) {
            return deletedUser;
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Failed to delete user');
    }
}