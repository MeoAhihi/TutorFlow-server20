const jwt = require("jsonwebtoken");

const decodeJwtMiddleware = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];

  const decoded = jwt.decode(token);
  req.decoded = decoded;
  next();
};

const decodeJwtCompleteMiddleware = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];

  const decoded = jwt.decode(token, { complete: true });
  req.decoded = decoded;
  next();
};

module.exports = { decodeJwtMiddleware, decodeJwtCompleteMiddleware };
