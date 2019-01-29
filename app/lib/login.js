var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var conn = require('../database/connectionString');

var result;

//Validate user login
router.get('/login', function(req, res, next) {

        conn.getConnection(
            function (err, client) {

                client.query('SELECT * FROM mt_User', function(err, rows) {
                    // And done with the connection.
                    if(err){
                        console.log('Query Error');
                    }

                    res.json(rows);
                    client.release();

                    // Don't use the connection here, it has been returned to the pool.
                });

        });     

});