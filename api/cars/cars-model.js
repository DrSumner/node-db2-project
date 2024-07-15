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

const update = (id, car) => {
  return db('dealer')
  .where('id', id)
  .update(car)
  .then(() => getById(id))
}
const remove = (id) => {
  return db('dealer')
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