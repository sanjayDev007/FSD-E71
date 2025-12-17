const express = require('express');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static HTML files

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auth')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    address: String
});

const User = mongoose.model('User', userSchema);

const sessionSchema = new mongoose.Schema({
    token: String,
    userId: mongoose.Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now, expires: 3600 }
});
const Session = mongoose.model('Session', sessionSchema);

app.post('/register', async (req, res) => {
    const { username, password , phone, address } = req.body;
    const user = new User({ username, password, phone, address });
    await user.save();
    res.status(201).send('User registered');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    const token = crypto.randomBytes(16).toString('hex');
    const session = new Session({ token, userId: user._id });
    await session.save();
    res.cookie('session_token', token, { httpOnly: true });
    res.json({ message: 'Login successful' , token  });
});

app.get('/protected', async (req, res) => {
    try {
        console.log('Request Headers:', req.headers);
    const token =   req?.headers['authorization'] || req?.cookies['session_token'];
    const session = await Session.findOne({ token });
    if (!session) {
        return res.status(401).send('Unauthorized');
    }
    res.send('Protected content');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.get('/profile', async (req, res) => {
    try {
        console.log('Request Headers:', req.headers);
    const token =   req?.headers['authorization'] || req?.cookies['session_token'];
    const session = await Session.findOne({ token });
    if (!session) {
        return res.status(401).send('Unauthorized');
    }
    const user = await User.findById(session.userId).select('-password');
    res.json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


