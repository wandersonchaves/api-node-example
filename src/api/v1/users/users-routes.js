const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.json({ user: 10 })
})

module.exports = router
