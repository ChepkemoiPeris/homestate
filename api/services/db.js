//connect to our MySQL database using the MySQL createConnection method.
// The createConnection method takes the host, username, password, and database name as required parameters
const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "house_listing",
});

conn.connect();

module.exports = conn;