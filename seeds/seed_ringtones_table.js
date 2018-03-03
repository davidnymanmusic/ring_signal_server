
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ringtone_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('ringtone_table').insert([
        {
         "name": "Glass 01",
         "url": "http://k003.kiwi6.com/hotlink/mx3gimwmup/glass_01.mp3"
       },
        {
         "name": "Glass 02",
         "url": "http://k003.kiwi6.com/hotlink/zczw0gr8e1/glass_02.mp3"
       },
        {
         "name": "Glass 03",
         "url": "http://k003.kiwi6.com/hotlink/p2mp3u3eqa/glass_03.mp3"
       },
        {
         "name": "Glass 04",
         "url": "http://k003.kiwi6.com/hotlink/r465k24kz8/glass_04.mp3"
       },
        {
         "name": "Glass 05",
         "url": "http://k003.kiwi6.com/hotlink/cfeqq2uqk4/glass_05.mp3"
       },
      ]);
    });
};

exports.down = function(knex, Promise) {
  return knex('ringtone_table').delete();
};
