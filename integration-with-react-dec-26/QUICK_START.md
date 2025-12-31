# Quick Start Guide

## Starting the Application

### 1. Start MongoDB
Make sure MongoDB is running on `localhost:27017`

### 2. Start the Backend Server
```powershell
cd e:\tutorial\FSD-E71\integration-with-react-dec-26\backend
node app.js
```

The backend will start on `https://entri.skillassign.com`

### 3. Start the Frontend Development Server
```powershell
cd e:\tutorial\FSD-E71\integration-with-react-dec-26\frontend
npm run dev
```

The frontend will typically start on `http://localhost:5173`

## Testing the Application

### Test Scenario 1: Regular User
1. Open browser to `http://localhost:5173`
2. Click "Register"
3. Enter username: `testuser`
4. Enter password: `password123`
5. Confirm password: `password123`
6. Select Role: **User**
7. Click Register
8. Login with the credentials
9. Try to access:
   - ✅ Home page (accessible)
   - ✅ Protected page (accessible)
   - ❌ Admin Secret page (should redirect or show error)

### Test Scenario 2: Admin User
1. Register a new user
2. Enter username: `admin`
3. Enter password: `admin123`
4. Confirm password: `admin123`
5. Select Role: **Admin**
6. Click Register
7. Login with the credentials
8. Try to access:
   - ✅ Home page (accessible)
   - ✅ Protected page (accessible)
   - ✅ Admin Secret page (accessible with secret message)

## What You Should See

### As a Regular User:
- Navbar shows "Welcome, user"
- Can see "Home" and "Protected" links
- Cannot see "Admin Secret" link

### As an Admin:
- Navbar shows "Welcome, admin"
- Can see "Home", "Protected", and "Admin Secret" links
- Can access the secret message: "THIS_IS_A_TOP_SECRET_FOR_ADMINS_ONLY"

## Troubleshooting

### Port Already in Use
If port 3000 or 5173 is in use, you can:
- Stop the process using that port
- Or modify the port in backend `app.js` and frontend API calls

### MongoDB Connection Error
Make sure MongoDB is running:
```powershell
mongod
```

### CORS Issues
The backend is configured with CORS enabled. If you still face issues, check the backend console for errors.
