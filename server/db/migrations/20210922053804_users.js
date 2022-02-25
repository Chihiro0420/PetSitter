exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.integer('petsitters_id').references('petsitters.id')
    table.string('auth0_id')
    table.string('name')
    table.string('email')
    table.string('location')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
