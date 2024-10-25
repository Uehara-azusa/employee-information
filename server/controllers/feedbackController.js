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
  const { feedback_type, content, created_at } = req.body;
  const sqlSelect = `insert into feedback
  (feedback_type,
  content,
  created_at)
  values(?,?,?)`;
  database.query(sqlInsert, [feedback_type, content, created_at],(err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to insert new user");
    } else {
      res.status(200).send("User added successfully");
    }
  });
};

module.exports = {
  getFeedback,
  addFeedback
};
