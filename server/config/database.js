const mysql = require("mysql2");

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee-information"
});

module.exports = database;
