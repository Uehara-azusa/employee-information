const database = require("../config/database");

//フィードバックを取得する
const getFeedback = (req, res) => {
  const sqlSelect = `select * from feedback`;
  database.query(sqlSelect, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving info from the database");
    } else {
      res.send(result);
    }
  });
};

// フィードバックを追加する
const addFeedback = (req, res) => {
  const sqlSelect = `insert * from feedback`;
  database.query(sqlSelect, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving users from the database");
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  getFeedback,
  addFeedback
};
