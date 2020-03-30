const express = require('express');
const router = express.Router();
const redis = require('../libs/redis');

router.get('/:interval', async (req, res, next) => {
  const interval = req.params.interval || 0;
  const message = await redis.getAsync('message' + interval);
  res.send(message);
});

module.exports = router;
