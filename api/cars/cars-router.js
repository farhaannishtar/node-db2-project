// DO YOUR MAGIC
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json("I CAN LIVE A BALANCED LYFE");
})

router.get('/:id', async (req, res, next) => {
  res.json("I CAN LIVE A BALANCED LYFE");
})

router.post('/', async (req, res, next) => {
  res.json("I CAN LIVE A BALANCED LYFE");
})

module.exports = router;