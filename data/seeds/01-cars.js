// STRETCH
const cars = [
    {vin: 'JM1GJ1V54F1257557', make: 'Ford', model: "Focus", mileage: 1214, title: 'foo', },
    {vin: '5NPE24AF0FH086335', make: 'Toyota', model: "Camry", mileage: 2214, transmission: 'barMotor'},
    {vin: '19XFB2F88EE057915', make: 'BMW', model: "3Series", mileage: 4214},
    {vin: 'JN1AZ36A55M774131', make: 'Honda', model: "Civic", mileage: 6214, title: 'baz', transmission: 'barMotor'},
]   

exports.cars = cars;

exports.seed = function(knex) {
    return knex('dealer').truncate()
    .then(function () {
     return knex('dealer').insert(cars)   
    })
    
}