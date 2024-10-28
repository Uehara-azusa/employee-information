const express = require("express");
const feedbackRouter = express.Router();
const employeeController = require("../controllers/feedbackController");

//フィードバックを取得する
feedbackRouter.get("/getFeedback/:id", employeeController.getFeedback);

// フィードバックを追加する
feedbackRouter.post("/addFeedback", employeeController.addFeedback);
// フィードバックを追加する
feedbackRouter.post("/addFeedback/:id", employeeController.addFeedback);

module.exports = feedbackRouter;
