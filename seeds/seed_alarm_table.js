exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alarm_table').del().then(function() {
    // Inserts seed entries
    return knex('alarm_table').insert([
      {
        "name": "8-bit Alarm 1",
        "url": "http://k003.kiwi6.com/hotlink/suh6o7z354/alarm_8bit_01.mp3"
      }, {
        "name": "8-bit Alarm 2",
        "url": "http://k003.kiwi6.com/hotlink/gyd82vp7av/alarm_8bit_02.mp3"
      }, {
        "name": "8-bit Alarm 3",
        "url": "http://k003.kiwi6.com/hotlink/quciq8eozb/alarm_8bit_03.mp3"
      }, {
        "name": "8-bit Alarm 4",
        "url": "http://k003.kiwi6.com/hotlink/9rptn5hcvd/alarm_8bit_04.mp3"
      }, {
        "name": "Annoying Alarm 01",
        "url": "http://k003.kiwi6.com/hotlink/tgyq5z6x2o/alarm_annoying_01.mp3"
      }, {
        "name": "Annoying Alarm 02",
        "url": "http://k003.kiwi6.com/hotlink/xkf7u8qzv3/alarm_annoying_02.mp3"
      }, {
        "name": "Annoying Alarm 03",
        "url": "http://k003.kiwi6.com/hotlink/xu6j1ydrl5/alarm_annoying_03.mp3"
      }, {
        "name": "Annoying Alarm 04",
        "url": "http://k003.kiwi6.com/hotlink/nrsbazk5nd/alarm_annoying_04.mp3"
      }, {
        "name": "Annoying Alarm 05",
        "url": "http://k003.kiwi6.com/hotlink/825e3erpje/alarm_annoying_05.mp3"
      }, {
        "name": "Annoying Alarm 06",
        "url": "http://k003.kiwi6.com/hotlink/nv2exjmdy3/alarm_annoying_06.mp3"
      }, {
        "name": "Annoying Alarm 07",
        "url": "http://k003.kiwi6.com/hotlink/k9nv40jdgw/alarm_annoying_07.mp3"
      }, {
        "name": "Annoying Alarm 08",
        "url": "http://k003.kiwi6.com/hotlink/88c8yo7zj0/alarm_annoying_08.mp3"
      }, {
        "name": "Annoying Alarm 09",
        "url": "http://k003.kiwi6.com/hotlink/ajix3zu1db/alarm_annoying_09.mp3"
      }, {
        "name": "Annoying Alarm 10",
        "url": "http://k003.kiwi6.com/hotlink/h1iswzzigf/alarm_annoying_10.mp3"
      }, {
        "name": "Annoying Alarm 12",
        "url": "http://k003.kiwi6.com/hotlink/zowalglvni/alarm_annoying_11.mp3"
      }, {
        "name": "Annoying Alarm 12",
        "url": "http://k003.kiwi6.com/hotlink/upkei906wu/alarm_annoying_12.mp3"
      }, {
        "name": "Annoying Alarm 13",
        "url": "http://k003.kiwi6.com/hotlink/gb8f8rw35e/alarm_annoying_13.mp3"
      }, {
        "name": "Annoying Alarm 14",
        "url": "http://k003.kiwi6.com/hotlink/di0gxtyxrn/alarm_annoying_14.mp3"
      }, {
        "name": "Glass Alarm 1",
        url: "http://k003.kiwi6.com/hotlink/zqxyosaphn/alarm_glass_01.mp3"
      }, {
        "name": "Glass Alarm 2",
        url: "http://k003.kiwi6.com/hotlink/c3rhzzpzkm/alarm_glass_02.mp3"
      }, {
        "name": "Glass Alarm 3",
        url: "http://k003.kiwi6.com/hotlink/nechzs4gvz/alarm_glass_03.mp3"
      }, {
        "name": "Glass Alarm 4",
        url: "http://k003.kiwi6.com/hotlink/a4ybb6y7pd/alarm_glass_04.mp3"
      }, {
        "name": "Xylo Alarm 1",
        url: "http://k003.kiwi6.com/hotlink/kwcar46hjo/alarm_xylo_01.mp3"
      }, {
        "name": "Xylo Alarm 1",
        url: "http://k003.kiwi6.com/hotlink/ckijddxsvz/alarm_xylo_02.mp3"
      }, {
        "name": "Xylo Alarm 1",
        url: "http://k003.kiwi6.com/hotlink/x7512wszzb/alarm_xylo_03.mp3"
      }, {
        "name": "Xylo Alarm 1",
        url: "http://k003.kiwi6.com/hotlink/jr8h9ehiq1/alarm_xylo_04.mp3"
      }
    ]);
  });
};
