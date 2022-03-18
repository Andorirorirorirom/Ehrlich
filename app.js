'use strict';

let http = require('http');
let fs = require('fs');
let express = require('express');
let cors = require('cors');
let morgan = require('morgan');
let basicAuth = require('express-basic-auth');
let compression = require('compression');
let app = express();
let ehrlich = require("./controllers/main")

app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use('/ehrlich.api', ehrlich);


http.createServer(app).listen('3000', (err) => {
    if (!err) {
        console.log('WELCOME TO IMAGE DEPOSITORY');
    }
});


