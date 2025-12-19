const jwt = require('jsonwebtoken');
const  secretKey = process.env.JWT_SECRET;
const checkAuth = (req, res, next) => {
    try {
    console.log('Request Headers:', req.headers);
    const token =   req?.headers['authorization'] || req?.cookies['session_token'];
    const isValid = jwt.verify(token, secretKey);
    req.user = isValid;
    if (!isValid) {
        return res.status(401).send('Unauthorized');
    }
    next();
    } catch (error) {
        res.status(500).send('Server error');
    }
}
module.exports = checkAuth;