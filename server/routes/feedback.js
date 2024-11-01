const express = require("express");
const feedbackRouter = express.Router();
const feedbackController = require("../controllers/feedbackController");

// 社員IDごとにフィードバックを取得する
feedbackRouter.get("/getFeedback/:id", feedbackController.getFeedback);

// 社員IDごとにフィードバックを追加する
feedbackRouter.post("/addFeedback/:id", feedbackController.addFeedback);

module.exports = feedbackRouter;
