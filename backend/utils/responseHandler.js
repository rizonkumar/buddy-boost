/**
 * Centralized response and error handler for controllers
 * Ensures consistent API responses and avoids leaking sensitive errors
 */

function sendSuccess(res, data = {}, message = "Success", status = 200) {
  return res.status(status).json({
    success: true,
    message,
    data
  });
}

function sendError(res, status = 500, message = "Server error", errors = []) {
  return res.status(status).json({
    success: false,
    message,
    errors: Array.isArray(errors) ? errors : [errors]
  });
}

module.exports = {
  sendSuccess,
  sendError,
};
