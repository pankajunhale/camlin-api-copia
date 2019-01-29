var mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 100,
        host     : '85.10.205.173',
        port     :  3306,
        user     : '*******',
        password : '*******',
        database : '*******',
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};