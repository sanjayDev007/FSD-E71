const jwt = require('jsonwebtoken');
const  secretKey = process.env.JWT_SECRET;
const { createUser, authenticateUser, getUserById, updateUserProfile } = require('../helpers/userHelper');
exports.register =  async (req, res) => {
    try {
    const { username, password , phone, address } = req.body;
    const user = await createUser({ username, password, phone, address });
    res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await authenticateUser(username, password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    //Encrpted token generation using JWT
    const token = jwt.sign({ userId: user._id, phone: user.phone, name: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Login successful' , token  });
}

exports.protected = async (req, res) => {
    try {
        res.status(200).json({ message: 'Protected content accessed' });
    } catch (error) {
        res.status(500).send('Server error');
    }
}

exports.getProfile = async (req, res) => {
    try {
    const user = await getUserById(req.user.userId);
    res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateProfile = async (req, res) => {
    try {
    const { phone, address } = req.body;
    await updateUserProfile(req.user.userId, { phone, address });
    res.json({ message: 'Profile updated' });
    } catch (error) {
        res.status(500).send('Server error');
    }
}