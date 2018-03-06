
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
        {
         "name": "Glass 06",
         "url": "http://k003.kiwi6.com/hotlink/hajm9oi497/glass_06.mp3"
       },
        {
         "name": "Glass 07",
         "url": "http://k003.kiwi6.com/hotlink/bltzf5jm8a/glass_07.mp3"
       },
        {
         "name": "Glass 08",
         "url": "http://k003.kiwi6.com/hotlink/dsrqi3nh8e/glass_08.mp3"
       },
        {
         "name": "Xylo 1",
         "url": "http://k003.kiwi6.com/hotlink/dnwvd9xr9e/xylo_01.mp3"
       },
        {
         "name": "Xylo 2",
         "url": "http://k003.kiwi6.com/hotlink/adybnj5ssg/xylo_02.mp3"
       },
        {
         "name": "Xylo 3",
         "url": "http://k003.kiwi6.com/hotlink/y7p1smnsg1/xylo_03.mp3"
       },
        {
         "name": "8-bit 1",
         "url": "http://k003.kiwi6.com/hotlink/l4s9jswf83/8bit_01.mp3"
       },
        {
         "name": "8-bit 2",
         "url": "http://k003.kiwi6.com/hotlink/76mfpmlvjj/8bit_02.mp3"
       },
        {
         "name": "8-bit 3",
         "url": "http://k003.kiwi6.com/hotlink/mmmnlwytyx/8bit_03.mp3"
       },
        {
         "name": "8-bit 4",
         "url": "http://k003.kiwi6.com/hotlink/1ophanr3jh/8bit_04.mp3"
       },
        {
         "name": "8-bit 5",
         "url": "http://k003.kiwi6.com/hotlink/gjc8rbcz05/8bit_05.mp3"
       },
        {
         "name": "8-bit 6",
         "url": "http://k003.kiwi6.com/hotlink/cyd84qz3mf/8bit_06.mp3"
       },
        {
         "name": "8-bit 7",
         "url": "http://k003.kiwi6.com/hotlink/jdntf05sei/8bit_07.mp3"
       },
        {
         "name": "8-bit 8",
         "url": "http://k003.kiwi6.com/hotlink/2d09apr22a/8bit_08.mp3"
       },
        {
         "name": "Glass Mute 01",
         "url": "http://k003.kiwi6.com/hotlink/ytj6aij0su/glass_mute_01.mp3"
       },
        {
         "name": "Glass Mute 02",
         "url": "http://k003.kiwi6.com/hotlink/ttjfrni9k7/glass_mute_02.mp3"
       },
       {
         "name": "Battle 1",
         url: "http://k003.kiwi6.com/hotlink/rl3l4uru4f/battle_01.mp3"
       },
       {
         "name": "Battle 2",
         url: "http://k003.kiwi6.com/hotlink/1y3m31xhud/battle_02.mp3"
       },
       {
         "name": "Battle 3",
         url: "http://k003.kiwi6.com/hotlink/rbnpbaj5mq/battle_03.mp3"
       },
       {
         "name": "Battle 4",
         url: "http://k003.kiwi6.com/hotlink/td030wt0b6/battle_04.mp3"
       },
       {
         "name": "Drum Machine 1",
         url: "http://k003.kiwi6.com/hotlink/1fpiik2oac/drum_machine_01.mp3"
       },
       {
         "name": "Drum Machine 2",
         url: "http://k003.kiwi6.com/hotlink/v5nxfucvsu/drum_machine_02.mp3"
       },
       {
         "name": "Marimba 01",
         url: "http://k003.kiwi6.com/hotlink/rcss9z95aw/marimba_01.mp3"
       },
       {
         "name": "Marimba 02",
         url: "http://k003.kiwi6.com/hotlink/e88k9gy2ys/marimba_02.mp3"
       },
       {
         "name": "Marimba 03",
         url: "http://k003.kiwi6.com/hotlink/opjq7i72f3/marimba_03.mp3"
       },
       {
         "name": "Marimba 04",
         url: "http://k003.kiwi6.com/hotlink/h8xjvqh03z/marimba_04.mp3"
       },
       {
         "name": "Marimba 05",
         url: "http://k003.kiwi6.com/hotlink/38j31qi45s/marimba_05.mp3"
       },
       {
         "name": "Marimba 06",
         url: "http://k003.kiwi6.com/hotlink/timplb8sjl/marimba_06.mp3"
       },
       {
         "name": "Marimba 07",
         url: "http://k003.kiwi6.com/hotlink/x3yjb6hvch/marimba_07.mp3"
       },
       {
         "name": "Marimba 08",
         url: "http://k003.kiwi6.com/hotlink/pwetdo5upy/marimba_08.mp3"
       },
       {
         "name": "Marimba 09",
         url: "http://k003.kiwi6.com/hotlink/vga1x3qzms/marimba_09.mp3"
       },
       {
         "name": "Marimba 10",
         url: "http://k003.kiwi6.com/hotlink/oyquhb7hep/marimba_10.mp3"
       },
       {
         "name": "Marimba 11",
         url: "http://k003.kiwi6.com/hotlink/ocj9vzj6r8/marimba_11.mp3"
       },
       {
         "name": "Marimba 12",
         url: "http://k003.kiwi6.com/hotlink/6gq6td5jp9/marimba_12.mp3"
       },
       {
         "name": "Woosh 1",
         url: "http://k003.kiwi6.com/hotlink/1yrk9g6vdl/woosh_01.mp3"
       },
       {
         "name": "Woosh 2",
         url: "http://k003.kiwi6.com/hotlink/zaourgfqs8/woosh_02.mp3"
       },
       {
         "name": "Woosh 3",
         url: "http://k003.kiwi6.com/hotlink/qh4ayfh5g9/woosh_03.mp3"
       }
      ]);
    });
};

exports.down = function(knex, Promise) {
  return knex('ringtone_table').delete();
};
