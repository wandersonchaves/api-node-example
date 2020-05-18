require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/api/users', async (_req, res) => {
  try {
    const users = [
      { id: 1, name: 'Paulo' },
      { id: 2, name: 'Wanderson' },
      { id: 3, name: 'John' },
    ]

    res.json(users)
  } catch (err) {
    res.status(500).json({ err: `ERROR: ${err}` })
  }
})

module.exports = app
