const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/responseHandler");

// JWT Authentication Middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return sendError(res, 401, "No token, authorization denied");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return sendError(res, 401, "Token is not valid");
  }
}

// Role-based Access Control Middleware (skeleton)
function roleMiddleware(roles = []) {
  return (req, res, next) => {
    if (!roles.length) return next(); // No roles specified, allow all
    if (!req.user || !roles.includes(req.user.role)) {
      return sendError(res, 403, "Access denied: insufficient permissions");
    }
    next();
  };
}

module.exports = {
  authMiddleware,
  roleMiddleware,
};
