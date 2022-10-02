const jwt = require('jsonwebtoken');
const isAuthenticated = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401);
        throw new Error('Not Authorized.');
    }
    try {
        const payload = jwt.verify(authorization, process.env.JWT_ACCESS_SECRET);
        req.payload = payload;
      } catch (err) {
        res.status(401);
        if (err.name === 'TokenExpiredError') {
          throw new Error(err.name);
        }
        throw new Error('Not Authorized.');
    }
    
    return next();
}

module.exports = {
  isAuthenticated
};