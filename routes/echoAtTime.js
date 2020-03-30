const express = require('express');
const router = express.Router();
const redis = require('../libs/redis');

router.get('/', async (req, res, next) => {
  const time = parseInt(req.query.time, 10) || 0;
  const message = req.query.message || '';

  if (!time) {
    return res.send('No time parameter found');
  }

  await redis.setAsync('message' + time, JSON.stringify(message));
  res.render('echoAtTime', { time, message });
});

module.exports = router;
