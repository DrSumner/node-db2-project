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
    .then(newCar => res.status(201).json(newCar))
    .catch(err => next(err))
})

// update a car
router.put('/:id', 
    checkCarId,
    checkCarPayload, 
     
    (req,res,next) => {
        const {id} = req.params
        const { make, model, mileage, title, transmission} = req.body
        const updatedinfo = {
            make:make, 
            model:model, 
            mileage:mileage, 
            title:title, 
            transmission:transmission}
    cars.update(id, updatedinfo)
    .then(updatedCar => res.json(updatedCar))
    .catch(err => next(err))
})

// delete a car
router.delete('/:id', checkCarId, (req,res,next) => {
    cars.remove(req.params.id)
    .then( () => res.json(req.car))
    .catch(err => next(err))
})

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: 'error preforming the operation'})
})

module.exports = router;