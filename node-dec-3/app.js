const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/users'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});