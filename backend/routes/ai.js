const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const requestLogger = require('../middleware/requestLogger');

// @route   POST api/ai/recommend
// @desc    Get farming recommendation
// @access  Private
router.post('/recommend', [auth, requestLogger], async (req, res) => {
  // In a real application, you would use a generative AI model
  res.json({
    recommendation: 'Based on the forecast, it is a good time to plant maize. Ensure proper irrigation as a dry spell is expected in the coming weeks.',
  });
});

// @route   POST api/ai/predict
// @desc    Get a prediction
// @access  Private
router.post('/predict', [auth, requestLogger], async (req, res) => {
  // In a real application, you would use a generative AI model
  const { crop, region } = req.body;
  res.json({
    prediction: `The predicted yield for ${crop} in ${region} is 20% higher than last year, given the current weather patterns.`,
  });
});

module.exports = router;
