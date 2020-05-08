var jwt = require('jsonwebtoken');

process.env.JWT_KEY = 'JWT_KEY';
const USERS = {
    user1: '123',
    user2: '123',
    user3: '123',
    tokens: []
}

const generateAuthToken = (username) => {
    const token = jwt.sign({_id: username}, process.env.JWT_KEY)
    USERS.tokens = USERS.tokens.concat({[username]: token});
    return token
}

const auth = async(req, res, next) => {
    const token = req.header('x-access-token') //.replace('Bearer ', '')
    try {
    const data = jwt.verify(token, process.env.JWT_KEY)
        if (data._id && USERS[data._id]) {
            next()
        }
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}

module.exports = { generateAuthToken, USERS, auth }