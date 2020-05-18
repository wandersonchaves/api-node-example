require('dotenv').config()

const Knex = require('knex')
const { Model } = require('objection')
const express = require('express')
const bodyParser = require('body-parser')

const knexfile = require('../knexfile')

const knex = Knex(knexfile)

Model.knex(knex)

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
