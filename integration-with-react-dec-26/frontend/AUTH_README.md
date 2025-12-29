# Authentication App with Role-Based Access Control

This application demonstrates a complete authentication system with role-based access control, including login, registration with role selection, protected routes, and admin-only pages.

## Features

- ✅ User Registration with Role Selection (User/Admin)
- ✅ User Login with JWT Authentication
- ✅ Protected Routes (accessible only to authenticated users)
- ✅ Admin-Only Secret Page
- ✅ Public Pages (accessible to everyone)
- ✅ Responsive UI with Tailwind CSS
- ✅ Token-based Authentication
- ✅ Context API for State Management

## Pages

### Public Pages (No Authentication Required)
- **Home** (`/home`) - Welcome page accessible to everyone
- **Login** (`/login`) - User login page
- **Register** (`/register`) - User registration with role selection

### Protected Pages (Authentication Required)
- **Protected** (`/protected`) - Accessible to all authenticated users
- **Admin Secret** (`/admin-secret`) - Accessible only to users with admin role

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with auth status
│   │   └── ProtectedRoute.jsx  # Route protection wrapper
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── pages/
│   │   ├── Home.jsx            # Public home page
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   ├── Protected.jsx       # Protected page
│   │   └── AdminSecret.jsx     # Admin-only secret page
│   └── App.jsx                 # Main app with routing
```

## How to Run

### Backend
```bash
cd backend
npm install
node app.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Usage Guide

### 1. Register a New User
- Navigate to `/register`
- Enter username and password
- Select role: **User** or **Admin**
- Click Register

### 2. Login
- Navigate to `/login`
- Enter your credentials
- Click Sign in

### 3. Access Protected Pages
- Once logged in, you can access the **Protected** page
- If you registered as **Admin**, you can also access the **Admin Secret** page

### 4. Role-Based Access
- **User Role**: Can access Home and Protected pages
- **Admin Role**: Can access Home, Protected, and Admin Secret pages

## API Endpoints

- `POST /register` - Register new user with role
- `POST /login` - Login and receive JWT token
- `GET /protected` - Protected endpoint (requires authentication)
- `GET /secret` - Admin-only endpoint (requires admin role)

## Technologies Used

### Frontend
- React 19
- React Router DOM v7
- Axios
- Tailwind CSS
- Context API

### Backend
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- CORS

## Security Features

- JWT token-based authentication
- Protected routes with automatic redirection
- Role-based access control
- Token stored in localStorage
- Authorization headers for API requests

## Testing the Application

1. **Create a regular user**:
   - Register with role "user"
   - Login and verify you can access Home and Protected pages
   - Verify you CANNOT access Admin Secret page

2. **Create an admin user**:
   - Register with role "admin"
   - Login and verify you can access all pages including Admin Secret

3. **Test protected routes**:
   - Try accessing `/protected` or `/admin-secret` without logging in
   - You should be redirected to the login page

## Notes

- Tokens expire after 1 hour
- Logout clears the token from localStorage
- The admin secret message is only visible to admin users
- All forms include validation and error handling
