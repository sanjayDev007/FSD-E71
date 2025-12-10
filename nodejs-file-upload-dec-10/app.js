const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir);
}

// Serve uploads folder as static files
app.use('/uploads', express.static(uploadsDir));

// Multer disk storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir);
	},
	filename: (req, file, cb) => {
		const uniqueName = Date.now() + '-' + file.originalname;
		cb(null, uniqueName);
	}
});
const upload = multer({ storage });

app.get('/', (req, res) => res.json({ ok: true, msg: 'File upload service' }));

// Upload endpoint: field name = 'file'
app.post('/upload', upload.single('file'), (req, res) => {
	if (!req.file) return res.status(400).json({ error: 'No file provided' });
	res.json({ fileUrl: `/uploads/${req.file.filename}`, filename: req.file.filename });
});

// List files
app.get('/files', (req, res) => {
	fs.readdir(uploadsDir, (err, files) => {
		if (err) return res.status(500).json({ error: err.message });
		const fileList = files.map(f => ({
			filename: f,
			url: `/uploads/${f}`
		}));
		res.json(fileList);
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
