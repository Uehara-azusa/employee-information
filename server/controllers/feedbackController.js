const database = require("../config/database");

// 社員IDごとにフィードバック情報を取得する
const getFeedback = (req, res) => {
  // 社員IDのパスパラメーターを取得
  const employeeId = req.params.id;
  const sqlSelect = `select * from feedback where employee_id = ?`;
  database.query(sqlSelect, [employeeId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving info from the database");
    } else {
      res.send(result);
    }
  });
};

// 社員IDごとにフィードバック情報を追加する
const addFeedback = (req, res) => {
  // 社員IDのパスパラメーターを取得
  const employeeId = req.params.id;
  const { feedback_type, content } = req.body;
  const sqlInsert = `insert into feedback
  (employee_id,
  feedback_type,
  content,
  created_at)
  values(?,?,?,now())`;
  database.query(
    sqlInsert,
    [employeeId, feedback_type, content],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Failed to insert new user");
      } else {
        res.status(200).send("User added successfully");
      }
    }
  );
};

module.exports = {
  getFeedback,
  addFeedback,
};
