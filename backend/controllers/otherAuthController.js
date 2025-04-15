const { sendSuccess } = require("../utils/responseHandler");

// Placeholder: Password Reset Request
exports.requestPasswordReset = async (req, res) => {
  // In production, trigger email with reset token
  return sendSuccess(res, {}, "Password reset request endpoint (not implemented)", 501);
};

// Placeholder: Password Reset
exports.resetPassword = async (req, res) => {
  return sendSuccess(res, {}, "Password reset endpoint (not implemented)", 501);
};

// Placeholder: Email Verification Request
exports.requestEmailVerification = async (req, res) => {
  // In production, trigger email with verification link
  return sendSuccess(res, {}, "Email verification request endpoint (not implemented)", 501);
};

// Placeholder: Email Verification
exports.verifyEmail = async (req, res) => {
  return sendSuccess(res, {}, "Email verification endpoint (not implemented)", 501);
};
