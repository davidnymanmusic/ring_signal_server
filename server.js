//<-----server.js----->

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knex = require('./db.js');

//<-----MIDDLEWARE---->

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//<------GET---------->

app.get('/ringtones', (req, res) => {
  knex('ringtone_table')
  .then((rows) => {
    res.json(rows)
  })
});
app.get('/alarms', (req, res) => {
  knex('alarm_table')
  .then((rows) => {
    res.json(rows)
  })
});

//<-----GET by ID----->

app.get('/ringtones/:id', (req, res) => {
  const ringtoneId = req.params.id;

  knex('ringtone_table')
  .where('id', ringtoneId)
  .then((rows) => {
    const foundRingtone = rows[0];
    res.json(foundRingtone)
  });
});
app.get('/alarms/:id', (req, res) => {
  const ringtoneId = req.params.id;

  knex('alarm_table')
  .where('id', ringtoneId)
  .then((rows) => {
    const foundRingtone = rows[0];
    res.json(foundRingtone)
  });
});

//<-----POST---------->

app.post('/ringtones', (req, res) => {
  const {name, url} = req.body;
  console.log(req.body);
  const newRingtone = {
    name,
    url
  };

  knex('ringtone_table')
  .insert(newRingtone)
  .returning('*')
  .then((rows) => {
    const ringtone = rows[0];
    res.json(ringtone);
  });
});
app.post('/alarms', (req, res) => {
  const {name, url} = req.body;
  console.log(req.body);
  const newRingtone = {
    name,
    url
  };

  knex('alarm_table')
  .insert(newRingtone)
  .returning('*')
  .then((rows) => {
    const ringtone = rows[0];
    res.json(ringtone);
  });
});

//<-----PATCH--------->

app.patch('/ringtones/:id', (req, res) => {
  const ringtoneId = req.params.id;
  const {name, url} = req.body;

  knex('ringtone_table').where('id', ringtoneId).returning('*')
  .update({name, url})
  .then((rows) => {
    const ringtone = rows[0];
    res.json(ringtone);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

app.patch('/alarms/:id', (req, res) => {
  const ringtoneId = req.params.id;
  const {name, url} = req.body;

  knex('alarm_table').where('id', ringtoneId).returning('*')
  .update({name, url})
  .then((rows) => {
    const ringtone = rows[0];
    res.json(ringtone);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

//<------DELETE------>


app.delete('/ringtones/:id', (req, res) => {
  knex('ringtone_table')
  .where('id', req.params.id)
  .del()
  .then(() => res.sendStatus(204));
});
app.delete('/alarms/:id', (req, res) => {
  knex('alarms')
  .where('id', req.params.id)
  .del()
  .then(() => res.sendStatus(204));
});



//<---I'M LISTENING--->

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))
