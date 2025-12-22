const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend')));
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auth')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);
// Routes
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).send('User registered');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
});

// Protected route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('No token provided');
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        res.send(`Hello ${decoded.role}, you have accessed a protected route!`);
    });
});

// Admin-only secret route
app.get('/secret', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('No token provided');
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        if (decoded.role !== 'admin') {
            return res.status(403).send('Forbidden: admin only');
        }
        // The secret text sent only to admins
        res.json({ secret: 'THIS_IS_A_TOP_SECRET_FOR_ADMINS_ONLY' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
