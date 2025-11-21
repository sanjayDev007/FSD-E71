const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/features', (req, res) => {
    res.sendFile(__dirname + '/public/features.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

let data = []

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!', data });
});

app.post('/api/data', (req, res) => {
    const newData = req.body.num;
    data.push(newData);
    res.json({ message: 'Data received successfully!', data });
});

app.get('/api/data/:num', (req, res) => {
    const num = req.params.num;
    const filteredData = data.filter(item => item == num);
    res.json({ message: 'Hello from the server!', data: filteredData });
});

app.delete('/api/data/:num', (req, res) => {
    const num = req.params.num;
    data = data.filter(item => item != num);
    res.json({ message: 'Data deleted successfully!', data });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});