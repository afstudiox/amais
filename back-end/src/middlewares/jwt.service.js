require('dotenv/config');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const jwtService = {
  createToken: (payload) => {
    const token = jwt.sign(payload, secret);
    return token;
  },

  verifyToken: (token) => {
    try {
      const decode = jwt.verify(token, secret);
      return decode;
    } catch (e) {
      const error = new Error('Token inválido');
      error.code = StatusCodes.UNAUTHORIZED;
      throw error;
    }
  }
};
module.exports = jwtService;

