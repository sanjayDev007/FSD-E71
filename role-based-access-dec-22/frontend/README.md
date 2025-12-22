# Frontend for RBAC demo

This simple frontend demonstrates logging in and fetching an admin-only secret.

How to run

1. Install backend dependencies and start the server (from the project root):

```powershell
npm install
node app.js
```

2. Open your browser to http://localhost:3000/ — the `index.html` is served by the Express server.

Usage notes

- Register a user with role `admin` (or `user`) then login.
- Only users whose JWT's `role` claim is `admin` will receive the secret from `/secret`.

Security note

- The frontend only requests the secret. The backend is responsible for enforcing role checks. A web client cannot truly hide server-side secrets from an admin user who has access to the browser; server-side enforcement is required and implemented in `app.js`.
