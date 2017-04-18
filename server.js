const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes/routes_directory')(app, {});
//configure db
app.listen(port, () => {
    console.log('Node online at ' + port);
});