const express = require('express')
const Meals = require('../models/Meals')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Soy GET')
    Meals.find().exec().then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    console.log('Soy GET:' + req.params.id)
    Meals.findById(req.params.id).exec().then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    console.log('Soy POST:[' + req.body + ']')
    Meals.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    console.log('Soy PUT:' + req.params.id)
    Meals.findByIdAndUpdate(req.params.id, req.body).then(() => res.sendStatus(204) )
})

router.delete('/:id', (req, res) => {
    console.log('Soy DELETE:' + req.params.id)
    Meals.findByIdAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router