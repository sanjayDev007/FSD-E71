const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

const UserSchema = new mongoose.Schema({
   username: String,
   age: Number
});
const User = mongoose.model('User', UserSchema);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', async (req, res) => {
    const { username, age } = req.body;
    const newUser = new User({ username, age });
    await newUser.save();
    res.status(201).send(newUser);
});
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).send();
});
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { username, age }, { new: true });
    res.send(updatedUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});