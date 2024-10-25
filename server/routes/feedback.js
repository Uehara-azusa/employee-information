const express = require("express");
const feedbackRouter = express.Router();
const employeeController = require("../controllers/feedbackController");

//フィードバックを取得する
feedbackRouter.get("/getFeedback", employeeController.getFeedback);

// フィードバックを追加する
feedbackRouter.post("/addFeedback", employeeController.addFeedback);

module.exports = feedbackRouter;
