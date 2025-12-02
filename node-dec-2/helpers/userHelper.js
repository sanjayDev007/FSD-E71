const db = require('../models/db');
exports.findUsers = async function() {
    try {
        const users = await db.get('users') || [];
        return users;
    } catch (err) {
        throw new Error('Failed to fetch users');
    }
}

exports.findUserById = async function(id) {
    try {
        const users = await db.get('users') || [];
        return users.find(u => u.id === id);
    } catch (err) {
        throw new Error('Failed to fetch user by ID');
    }
}

exports.createUser = async function(user) {
    try {
        const addedUser = await db.pushToArray('users', user);
        return addedUser;
    }
    catch (err) {
        throw new Error('Failed to add user');
    }
}

exports.findAndUpdateUser = async function(id, updatedData) {
    try {
        const users = await db.get('users') || [];
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedData };
            await db.set('users', users);
            return users[userIndex];
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Failed to update user');
    }
}

exports.findAndDeleteUser = async function(id) {
    try {
        let users = await db.get('users') || [];
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1)[0];
            await db.set('users', users);
            return deletedUser;
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Failed to delete user');
    }
}