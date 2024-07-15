exports.up = function (knex) {
  return knex.schema.createTable('dealer', tbl => {
    tbl.increments();

    tbl.text('vin', 128).notNullable().unique();

    tbl.text('make', 128).notNullable();

    tbl.text('model', 128).notNullable();

    tbl.float('mileage').notNullable();

    tbl.text('title', 128);

    tbl.text('transmission', 128)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('dealer');
};
