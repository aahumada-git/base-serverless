const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser);

const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const partlists = require('./routes/partlists')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.xml());
app.use(bodyParser.raw({type: () => true}))

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/partlists', partlists)
app.use('/api/auth', auth)

module.exports = app