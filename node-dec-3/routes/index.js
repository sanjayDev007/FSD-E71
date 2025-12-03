const router = require('express').Router();
const userHelper = require('../helpers/userHelper');
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' , description: 'This is the home page', items: ['Item 1', 'Item 2', 'Item 3'], num: 10});
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About', description: 'This is the about page' });
});

router.get('/users', async (req, res) => {
    let users = await userHelper.findUsers();
    res.render('users', { title: 'Users', description: 'This is the users page', users });
});
module.exports = router;