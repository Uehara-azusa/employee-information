const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee-information"
});

module.exports = db;
