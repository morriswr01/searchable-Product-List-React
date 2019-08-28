const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config');

// Import authentication middleware
const auth = require('../../middleware/auth')

// Import router from api/users
const router = express.Router();

// Get user model
const User = require('../../models/User');

// @router POST api/users/auth
// @desc Login - Authenticate existing User from email and password
// @access Public
router.post('/auth', (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' })
    }

    // Validate user email and password
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Validated password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    // Create jwt token to return
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({ user, token })
                        }
                    )
                })
        })
});

// @router POST api/users
// @desc Register new User with name, email and password
// @access Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' })
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: 'User already registered' });
            }

            const newUser = new User({ name, email, password });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {

                            // Create jwt token to return
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({ user, token })
                                }
                            )


                        });
                });
            })
        });
});

// @route GET api/users/user
// @desc Get user data from the userID attatched to the request by the auth middleware(in middleware/auth.js)
// @access Private(authentication token required)
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password') 
        .then(user => res.json(user));
})

module.exports = router;