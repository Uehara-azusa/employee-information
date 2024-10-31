const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/employees");
const feedbackRoutes = require("./routes/feedback");

app.use(express.json());
app.use(cors());

// ユーザー関連のAPIルートを使用
app.use("/api", userRoutes);
app.use("/api", feedbackRoutes);

// サーバーの立ち上げ
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
