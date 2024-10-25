const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// ユーザー一覧を取得する
router.get("/employee", employeeController.getEmployee);

// 遷移先ユーザー情報を取得する
router.get("/detail", employeeController.getDetail);

module.exports = router;
