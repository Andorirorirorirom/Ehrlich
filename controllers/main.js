'use strict';

let express = require('express');
let route = express.Router();
let mysql = require('mysql2');
let crypto = require('crypto');
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
const { resolve } = require('promise');
let getPexels = pexels.createClient(CLOUD_CONFIG.PEXEL_CONFIG.API_KEY);
cloudinary.config(CLOUD_CONFIG.CLOUDINARY_CONFIG);


const verifyUser = (req, res, next) => {

    //VERIFY USER (WIP)

    req.USER_EMAIL = 'email@admin.com';
    req.USER_ROLE = 'administrator';

    next();

    /*let email = req.query.email;
    let verifyEmail = req.query.email.match(/^\S+@\S+\.\S+$/);
    let enc = crypto.createHash('sha256').update(req.query.password).digest('hex');   

    if (verifyEmail) {
        let sql = `SELECT * FROM tbl_users WHERE email = '${email}' AND password = '${enc}'`

        connect.query(sql, (err, result) => {

            if (err) throw err;
            if (result > 0) {
                req.USER_EMAIL = result[0].email;
                req.USER_ROLE = result[0].role;                
            }else{
                req.USER_ROLE = 'Guest';
            }

            next();
        });

    } else {
        res.status(400).json({ message: "Invalid Email" });
    }*/
};
const getImages = async (req, res, next) => {


    //GET RANDOM PICS USING PEXELS API

    let query = req.query;
    let limit = 5;
    if ("limit" in query) {
        if (query.limit < 11) {
            limit = query.limit;
        } else {
            limit = 10;
        }

    }

    let urls = [];
    let urlArray = [];

    console.log("Limit", limit);
    for (var i = 0; i < limit; i++) {
        await getPexels.photos.random({ query: "Random", per_page: limit }).then((photos) => {
            urls.push(photos.src.medium);
        });
    }
    req.LIMITS = limit;
    req.RAW_URLS = urlArray;
    req.URL_ARRAY = urls;

    next();


};
const fileTransfer = async (req, res, next) => {


    //TRANSFER THE PICS TO CLOUDINARY

    let url = req.URL_ARRAY;
    let cloud_url = [];
    for (var i = 0; i < req.LIMITS; i++) {
        await cloudinary.uploader.upload(url[i], { folder: "Ehrlich" }, (err, result) => {
            if (err) {
                res.status(500).end("Upload Failed")
            } else {
                let obj = {
                    hits: 1,
                    url: result.secure_url
                }
                cloud_url.push(obj);
            }

        });
    }


    req.CLOUD_URL = cloud_url;

    next();


};
const fetchTables = (req, res, next) => {

    //INSERT URL's AND RETURN THE ITEMS

    let sql = `INSERT INTO tbl_files (url, hits, user_email) VALUES ?`
    let values = [];

    req.CLOUD_URL.forEach((key) => {
        let arr = [key.url, key.hits, req.USER_EMAIL];
        values.push(arr);
    });
    connect.query(sql, [values], (err, result, fields) => {
        if (err) throw err;
        let sql = `SELECT * FROM tbl_files WHERE user_email = '${req.USER_EMAIL}'`
        connect.query(sql, (err, results, fields) => {
            if (err) throw err;
            let fileData = [];
            results.forEach((key) => {
                delete key.user_email
                fileData.push(key);
            })
            req.FILE_DATA = fileData;
            next();
        });

    });




};

route.get('/images', jsonParser, verifyUser, getImages, fileTransfer, fetchTables, (req, res) => {

    let mainObject = {
        limit: req.LIMITS,
        data: req.FILE_DATA
    }
    res.status(200).json(mainObject);

});


route.get('/', (req, res) => {


});



module.exports = route;
