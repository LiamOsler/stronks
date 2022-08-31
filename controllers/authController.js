const User = require('../models/User');

module.exports.signup_get = (req, res) => {
    res.render('signup', { title: 'Signup' });
}

module.exports.login_get = (req, res) => {
    res.render('login', { title: 'Logged In' });
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.create({ email, password });
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
        res.status(400).send("error user not created");
    }

    console.log(req.body);
}

module.exports.login_post = (req, res) => {
    res.send('User login', { title: 'Logged In' });
}
