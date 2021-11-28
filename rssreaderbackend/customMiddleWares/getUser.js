const jwt = require('jsonwebtoken');

const jwtSignature = "amandalal";

const getuser = (req, res, next)=>{
  const authToken = req.header('auth-token');
  const decoded = jwt.verify(authToken, jwtSignature);
  req.user = decoded;
  next();
}
module.exports = getuser;