// DO YOUR MAGIC
const express = require('express')
const cars = require('./cars-model')
const {checkVinNumberUnique, checkCarId, checkCarPayload, checkVinNumberValid} = require('./cars-middleware')

const router = express.Router()

// get all cars
router.get('/', (req,res, next) => {
    cars.getAll()
    .then(cars => res.json(cars))
    .catch(err => next(err)) 
})

// get a car
router.get('/:id', checkCarId, (req,res) => {
    res.json(req.car)
})

// post a car
router.post('/', 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique, 
    (req,res,next) => {
    cars.create(req.body)
    .then(newcar => res.status(201).json(newcar))
    .catch(err => next(err))
})

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: 'error preforming the operation'})
})

module.exports = router;