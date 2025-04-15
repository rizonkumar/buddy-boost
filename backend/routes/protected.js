const express = require("express");
const { authMiddleware, roleMiddleware } = require("../middleware/auth");
const { sendSuccess } = require("../utils/responseHandler");

const router = express.Router();

// @route   GET /api/protected
// @desc    Protected route example
// @access  Private (any authenticated user)
router.get("/protected", authMiddleware, (req, res) => {
  return sendSuccess(res, { user: req.user }, "Access granted to protected route");
});

// @route   GET /api/admin
// @desc    Admin-only route example
// @access  Private (admin only)
router.get("/admin", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  return sendSuccess(res, { user: req.user }, "Access granted to admin route");
});

module.exports = router;
