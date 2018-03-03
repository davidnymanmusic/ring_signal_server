
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alarm_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('alarm_table').insert([
        {"name": "",
        "url": ""},
        {"name": "",
        "url": ""},
        {"name": "",
        url: ""}
      ]);
    });
};
