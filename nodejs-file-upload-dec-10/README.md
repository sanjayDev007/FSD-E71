# Node.js File Upload

Simple file upload API using Express and multer. Files are saved to an `uploads` folder and served as static files.

## Endpoints

- `POST /upload` — Upload a file. Field name: `file`. Returns `fileUrl` and `filename`.
- `GET /files` — List all uploaded files with their URLs.
- `GET /uploads/<filename>` — Download/view a file directly (static file serving).
- `GET /` — Health check.

## Quick Start

1. Install dependencies:

```powershell
npm install
```

2. Start the server:

```powershell
npm start
# or for development with nodemon
npm run dev
```

3. Upload a file (PowerShell):

```powershell
curl -F "file=@C:\path\to\file.jpg" http://localhost:3000/upload
```

4. List files:

```powershell
curl http://localhost:3000/files
```

5. View/download a file (returns the file directly):

```powershell
curl http://localhost:3000/uploads/1734000000000-file.jpg -o downloaded-file.jpg
```

## How It Works

- Files are stored in the `uploads` folder on disk.
- multer saves each file with a timestamp prefix to ensure unique names.
- The `uploads` folder is served as static files via Express.
- No database required — simple and lightweight.


