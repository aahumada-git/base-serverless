const express = require('express')
const Orders = require('../models/Orders')
const { isAuthenticated, hasRoles } = require('../auth')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('FINNING returnurl validation GET method')
    res.status(200).send('FINNING validation: GET method')
    // Orders.find().exec().then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    console.log('GET method:' + req.params.id)
    res.status(200).send('GET method:' + req.params.id)
    // Orders.findById(req.params.id).exec().then(x => res.status(200).send(x))
})

// router.post('/', isAuthenticated, (req, res) => {
router.post('/',  (req, res) => {
    console.log('POST method:[' + req.body + ']')
    res.status(201).send(req.body)
    // const { _id } = req.user
    // Orders.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))
})

router.put('/:id', isAuthenticated, hasRoles(['user','admin']), (req, res) => {
    console.log('PUT method::' + req.params.id)
    res.sendStatus(204)
    //Orders.findByIdAndUpdate(req.params.id, req.body).then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req, res) => {
    console.log('DELETE method:' + req.params.id)
    res.sendStatus(204)
    // Orders.findByIdAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router