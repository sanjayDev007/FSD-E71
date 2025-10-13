# Backend API Documentation

This is a simple Node.js server using only built-in modules for user authentication with JSON file storage.

## Setup

1. Ensure you have Node.js installed.
2. Run the server: `node server.js`
3. The server will start on port 3000.

## API Endpoints

### POST /register

Registers a new user.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response (201):**
```json
{
  "message": "User registered"
}
```

**Error Responses:**
- 400: User already exists or invalid JSON

### POST /login

Authenticates a user and returns a token.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "token": "hex_string"
}
```

**Error Responses:**
- 401: Invalid credentials
- 400: Invalid JSON

### GET /protected

A protected route that requires authentication.

**Headers:**
- Authorization: Bearer <token>

**Response (200):**
```json
{
  "message": "Protected data",
  "user": "username"
}
```

**Error Responses:**
- 401: Unauthorized or invalid token

## Data Storage

- Users are stored in `users.json` with hashed passwords (SHA-256).
- Sessions are stored in `sessions.json` with tokens as keys and usernames as values.

## Notes

- Passwords are hashed using SHA-256 for security.
- Tokens are random 32-character hex strings.
- Sessions persist across server restarts.
- No external dependencies; uses only Node.js built-in modules.
