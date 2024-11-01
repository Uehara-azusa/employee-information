const employeeModel = require("../models/employeeModel");

// 社員情報を取得する
exports.getEmployee = (req, res) => {
  employeeModel.getAll((err, result) => {
    // データベース操作中にエラーが発生した場合のエラーハンドリング
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving info from the database");
    }
    // 正常にユーザー情報が更新された場合のレスポンス
    res.send(result);
  });
};

// 社員IDごとに遷移先ユーザー情報を取得する
exports.getDetail = (req, res) => {
  // URLパラメータからユーザーIDを取得
  const employeeId = req.params.id;
  employeeModel.getDetailById(employeeId, (err, result) => {
    // データベース操作中にエラーが発生した場合のエラーハンドリング
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving users from the database");
    }
    // 正常にユーザー情報が更新された場合のレスポンス
    res.send(result); // 取得した配列データの1つ目の要素をレスポンスとして送信
  });
};
