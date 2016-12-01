/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request');

// redirect https to http for Heroku deployment
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public/dist'));

// proxy to the data.taipei
app.get('/mrt.json', (req, res) => {
  const ENDPOINT_MRT = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
  request(ENDPOINT_MRT).pipe(res);
});

// fake data
const mrtJSON = require('./fakedata/mrt.json');
app.get('/test-mrt.json', (req, res) => {
  res.json(mrtJSON);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Express server is up on port ${PORT}`);
});
