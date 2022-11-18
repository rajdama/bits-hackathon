const User = require('../models/user_schema.js')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({ message: "Email already in use" })
        })
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body

    const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString()
    })
    _user.save((error, data) => {
        if (error) {
            return res.status(400).json({ message: 'something wrong' })
        }

        return res.status(201).json({ message: 'user created successfully' })
    })
}

exports.signin = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error })
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' })
                    const { _id, firstName, lastName, email, fullName } = user
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, fullName
                        }
                    })
                }
                else {
                    return res.status(400).json({ message: 'Invalid password' })
                }
            }
            else {
                return res.status(400).json({ message: 'Signup required !!' })
            }
        })
}