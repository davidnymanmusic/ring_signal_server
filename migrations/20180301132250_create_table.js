
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ringtone_table', (table) => {
    table.increments();
    table.string('name', 100).notNull();
    table.string('url').notNull();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('ringtone_table')
};
