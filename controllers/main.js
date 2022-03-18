'use strict';

let express = require('express');
let route = express.Router();
let mysql = require('mysql2');
let bodyParser = require('body-parser');
let axios = require('axios');
let promise = require('promise');
let jsonParser = bodyParser.json();
let urlEncodedForm = bodyParser.urlencoded({ extended: true });
let cloudinary = require('cloudinary').v2;
let streamifier = require('streamifier');
let multer = require('multer');
let DB_CONFIG = require('../config/db.config')
let CLOUD_CONFIG = require('../config/cloud.config');
let connect = mysql.createConnection(DB_CONFIG.EHRLICH_MYSQL_DB_CONFIG);
let pexels = require('pexels');
let getPexels = pexels.createClient(CLOUD_CONFIG.PEXEL_CONFIG.API_KEY);
cloudinary.config(CLOUD_CONFIG.CONFIG);




route.get('/', (req, res) => {
   
    

});


route.get('/images', (req, res) => {


});



module.exports = route;
