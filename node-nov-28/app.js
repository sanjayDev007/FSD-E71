const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors(["http://localhost:3000", "http://example.com", "http://localhost:5500"]));

function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(express.json());
app.use(logRequest);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});
app.post('/about', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({status: 'success', received: data});
});
app.use('/data', (req, res) => {
    res.json({
        message: 'This is some data',
    })
});
app.get("/serverside-data", (req, res) => {
    let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Datas</p>
    <div id="app">
    <pre> {
  "message": "This is some data"
}</pre> 
    </div>
</body>
</html>
    `
    res.send(html);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});