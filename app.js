'use strict';

let http = require('http');
let fs = require('fs');
// let mssql = require('mssql');
let express = require('express');
let cors = require('cors');
let request = require('request');
let morgan = require('morgan');
let basicAuth = require('express-basic-auth');
let compression = require('compression');
let app = express();


app.use(cors());
app.use(compression());
app.use(morgan('combined'));



http.createServer(app).listen('8080', (err) => {
    if (!err) {
        console.log('WELCOME TO IMAGE DEPOSITORY');
    }
});


