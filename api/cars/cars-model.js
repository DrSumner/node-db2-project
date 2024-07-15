const db = require('../../data/db-config')



const getAll = () => {
  // DO YOUR MAGIC
  return db('dealer')
}

const getById = (id) => {
  return db('dealer')
  .where({id})
  .first();
}

const create = (car) => {
  // DO YOUR MAGIC
  return db('dealer')
  .insert(car)
  .then(() => car)
}

module.exports = {
  getAll,
  getById,
  create,
}