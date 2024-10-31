const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// ユーザー一覧を取得する
router.get("/employee", employeeController.getEmployee);

// 社員IDごとに遷移先ユーザー情報を取得する
router.get("/detail/:id", employeeController.getDetail);

module.exports = router;
