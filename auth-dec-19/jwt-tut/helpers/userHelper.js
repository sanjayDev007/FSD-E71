const User = require("../models/User");

exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).select('-password');
        return user;
    } catch (error) {
        throw new Error('Error fetching user');
    }
};

exports.updateUserProfile = async (userId, profileData) => {
    try {
        await User.findByIdAndUpdate(userId, profileData);
        return { message: 'Profile updated' };
    } catch (error) {
        throw new Error('Error updating profile');
    }
};

exports.createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return { message: 'User registered' };
    }
    catch (error) {
        throw new Error('Error registering user');
    }
};

exports.authenticateUser = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            throw new Error('Invalid credentials');
        }
        return user;
    } catch (error) {
        throw new Error('Error during authentication');
    }
};