// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// we use source.[name of connection] to hook into mysql
//var connection = 

// Set up our connection information
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cardinal1",
  database: "burger_db"

  // jawsDB: ({
  //   port: 3306,
  //   host: "<host name>",
  //   user: "<name of user>",
  //   password: "<password>",
  //   database: "<name of database>"
  // })
});


connection.connect(function(err) {
  if (err) {
    return console.error("error connecting: " + err.stack);
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;



