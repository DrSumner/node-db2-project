const cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const {id} = req.params
cars.getById(id)
.then(car => {
  
  
 if( car && Object.keys(car).length > 0) {
  req.car = car; next()
}
 else
 res.status(404).json({message:`car with id ${id} is not found`})

})
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage, title, transmission} = req.body
  if(!vin || !make || !model || !mileage){
    !vin 
    ? res.status(400).json({message: `vin is missing`})
    : !make 
    ? res.status(400).json({message: `make is missing`})
    : !model
    ? res.status(400).json({message: `model is missing`})
    : res.status(400).json({message: `mileage is missing`})
  } else {
    if(typeof mileage !== 'number'){ return res.status(400).json({message:'mileage must be a number'})}
    req.body.vin = vin.trim()
    req.body.make = make.trim()
    req.body.model = model.trim()
    if(title){req.body.title = title.trim()}
    if(transmission){req.body.transmission = transmission.trim()}
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin} = req.body
  const isValid = vinValidator.validate(vin)
  isValid 
  ? next()
  : res.status(400).json({message: `vin ${vin} is invalid`})
  
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin} = req.body
  cars.getAll()
  .then(cars => { 
     const vinExist = cars.some( car => car.vin === vin)
     if(vinExist){
      return res.status(400).json({message: `vin ${vin} already exists`})
     }
    next()
  })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}