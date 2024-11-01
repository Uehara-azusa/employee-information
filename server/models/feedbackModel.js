const database = require("../config/database");

const feedbackModel = {
  // 社員IDごとにフィードバック情報を取得するメソッド
  getFeedbackById: (employeeId, callback) => {
    const sqlSelect = `select * from feedback where employee_id = ?`;

    database.query(sqlSelect, [employeeId], (err, result) => {
      if (err) return callback(err, null);
      return callback(null, result);
    });
  },

  // 社員IDごとにフィードバック情報を追加するメソッド
  addFeedbackById: (employeeId, data, callback) => {
    const sqlInsert = `insert into feedback
    (employee_id,
    feedback_type,
    content,
    created_at)
    values(?,?,?,now())`;

    database.query(sqlInsert, [employeeId, data.feedback_type, data.content], (err, result) => {
      if (err) return callback(err, null);
      return callback(null, result);
    });
  },
};

module.exports = feedbackModel;
