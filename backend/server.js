// index.js
const express = require('express');
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

// env
const API_SERVER_PORT = 8090;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/tes', (req, res) => {
    res.json({ message: 'this is test' });
  });

app.listen(API_SERVER_PORT, function () {
    console.log(`server listening on port ${API_SERVER_PORT}`);
});