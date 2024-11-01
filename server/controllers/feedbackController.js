const feedbackModel = require("../models/feedbackModel");

// 社員IDごとにフィードバック情報を取得する
exports.getFeedback = (req, res) => {
  // 社員IDのパスパラメーターを取得
  const employeeId = req.params.id;
  feedbackModel.getFeedbackById(employeeId, (err, result) => {
    // データベース操作中にエラーが発生した場合のエラーハンドリング
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving info from the database");
    }
    // 正常にユーザー情報が取得された場合のレスポンス
      res.send(result);
    })
  };

// 社員IDごとにフィードバック情報を追加する
exports.addFeedback = (req, res) => {
  // 社員IDのパスパラメーターを取得
  const employeeId = req.params.id;
  const { feedback_type, content } = req.body;

  feedbackModel.addFeedbackById(
    employeeId,
    { employeeId, feedback_type, content },
    (err, result) => {
      // データベース操作中にエラーが発生した場合のエラーハンドリング
      if (err) {
        console.error(err);
        res.status(500).send("Failed to insert new user");
      }
      // 正常にユーザー情報が更新された場合のレスポンス
        res.status(200).send("User added successfully");
      })
    }
