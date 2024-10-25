const express = require("express");
const router = express.Router();
const userController = require("../../../server/controllers/employeeController");

// 社員情報一覧を取得する
router.get("/employee", userController.getEmployee);

// 遷移先ユーザー情報を取得する
router.get("/detail", userController.getDetail);

// 新しいユーザーを追加する
// router.post("/insert/user", userController.insertUser);

module.exports = router;
