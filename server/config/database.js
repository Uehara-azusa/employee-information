const mysql = require("mysql2");

// MySQL Workbenchとの接続設定
const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee-information"
});

module.exports = database;
