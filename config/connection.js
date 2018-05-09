// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
  var connection = mysql.createConnection({
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Cardinal1",
    database: "burgers_db"
  },
  // jawsDB
  jawsDB: {
    port: 3306,
    host: "<host name>",
    user: "<name of user>",
    password: "<password>",
    database: "<name of database>"
  }
});
// we use source.[name of connection] to hook into mysql
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;




