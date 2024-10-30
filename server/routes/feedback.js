const express = require("express");
const feedbackRouter = express.Router();
const employeeController = require("../controllers/feedbackController");

// 社員IDごとにフィードバックを取得する
feedbackRouter.get("/getFeedback/:id", employeeController.getFeedback);

// 社員IDごとにフィードバックを追加する
feedbackRouter.post("/addFeedback/:id", employeeController.addFeedback);

module.exports = feedbackRouter;
