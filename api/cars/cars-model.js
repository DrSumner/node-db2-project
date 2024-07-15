const db = require('../../data/db-config')



const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  return db('cars')
  .where({id})
  .first();
}

const create = (car) => {
  // DO YOUR MAGIC
  return db('cars')
  .insert(car)
  .then(() => car)
}

const update = (id, car) => {
  return db('cars')
  .where('id', id)
  .update(car)
  .then(() => getById(id))
}
const remove = (id) => {
  return db('cars')
  .where({id})
  .del()
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}