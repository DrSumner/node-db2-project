const express = require("express")

const server = express()
server.use(express.json())
const carRouter = require('./cars/cars-router')

server.use('./api/cars', carRouter)
// DO YOUR MAGIC

module.exports = server
