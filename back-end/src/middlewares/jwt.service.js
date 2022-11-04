require('dotenv/config');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const jwtService = {
  createToken: (payload) => {
    const token = jwt.sign(payload, secret);
    return token;
  },

  verifyToken: (token) => {
    const decoded = jwt.verify(token, secret);
    return decoded;
  }
};
module.exports = jwtService;

