const express = require("express");
const otherAuthController = require("../controllers/otherAuthController");

const router = express.Router();

// @route   POST /api/auth/request-password-reset
// @desc    Request password reset (placeholder)
// @access  Public
router.post("/request-password-reset", otherAuthController.requestPasswordReset);

// @route   POST /api/auth/reset-password
// @desc    Reset password (placeholder)
// @access  Public
router.post("/reset-password", otherAuthController.resetPassword);

// @route   POST /api/auth/request-email-verification
// @desc    Request email verification (placeholder)
// @access  Public
router.post("/request-email-verification", otherAuthController.requestEmailVerification);

// @route   POST /api/auth/verify-email
// @desc    Verify email (placeholder)
// @access  Public
router.post("/verify-email", otherAuthController.verifyEmail);

module.exports = router;
