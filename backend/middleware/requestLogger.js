const RequestLog = require('../models/RequestLog');

module.exports = async function (req, res, next) {
  const { originalUrl } = req;
  const userId = req.user ? req.user.id : null;

  try {
    const newLog = new RequestLog({
      userId,
      endpoint: originalUrl,
    });
    await newLog.save();
  } catch (err) {
    console.error('Failed to log request:', err.message);
  }

  next();
};