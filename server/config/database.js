const mysql = require("mysql2");
require('dotenv').config()

// MySQL Workbenchとの接続設定
const database = mysql.createPool({
  host: process.env.HOST, //ホストの環境変数
  user:process.env.USER, //ユーザーの環境変数
  password: process.env.PASSWORD, //パスワードの環境変数
  database: process.env.DATABASE //データベースの環境変数
});

module.exports = database;
