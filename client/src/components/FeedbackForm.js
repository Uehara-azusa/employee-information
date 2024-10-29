import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const FeedbackForm = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const [select, setSelect] = useState("keep");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // employeeService.jsを通じてAPIリクエストを送る
    employeeService
      .getFeedback(id)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("フィードバック情報の取得に失敗しました：", error)
      );
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ
    employeeService
      .addFeedback(id, employee.employee_id, select, feedback)

      .then(() => {
        alert("フィードバックが送信されました！");
        setFeedback(""); // フィードバック送信後にテキストボックスをリセット
      })
      .catch((error) => {
        console.error("Error during feedback submission:", error);
        alert("フィードバックの送信に失敗しました。");
      });
  };

  function feedbackColor(type) {
    return type === "keep"
      ? "#00BFFF"
      : type === "problem"
      ? "red"
      : type === "try"
      ? "black"
      : "black"; // デフォルトは黒色
  }

  return (
    <>
      {employee.map((employee) => {
        const today = new Date(employee.created_at);
        console.log(today);
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const h = today.getHours();
        const mm = today.getMinutes();

        return (
          <div className="feedbackbox">
            <p className="todaydate">
              {month + "月" + day + "日 " + h + ":" + mm}
            </p>
            <hr className="displayline" />
            <p
              className="feedbackdate"
              id={employee.feedback_type}
              style={{ color: feedbackColor(employee.feedback_type) }}
            >
              {employee.content}
            </p>
          </div>
        );
      })}
      <hr className="feedbackline" />
      <form onSubmit={handleSubmit}>
        <div className="radiogroup">
          <label className="radiobutton1">
            <input
              type="radio"
              name="category"
              onChange={(e) => setSelect(e.target.value)}
              value="keep"
              checked={select === "keep"}
            />
            ポジティブ
          </label>
          <label className="radiobutton2">
            <input
              type="radio"
              name="category"
              onChange={(e) => setSelect(e.target.value)}
              value="problem"
            />
            ネガティブ
          </label>
          <label className="radiobutton3">
            <input
              type="radio"
              name="category"
              onChange={(e) => setSelect(e.target.value)}
              value="try"
            />
            その他
          </label>
        </div>
        <br />
        <div className="inputform">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button type="submit" className="submitbuton">
            投稿
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
