import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const FeedbackForm = (addFeedback) => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const [select, setSelect] = useState("keep");
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    // employeeService.jsを通じてAPIリクエストを送る
    employeeService.getFeedback(id)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("フィードバック情報の取得に失敗しました：", error));
  }, [id]);

  const handleSubmit = (e) => {
  employeeService.addFeedback(id, select, feedback)
    .then(() => {
      alert("フィードバックが送信されました！");
      setFeedback(""); // フィードバック送信後にテキストボックスをリセット
    })
    .catch((error) => {
      alert("フィードバック送信に失敗しました。");
    });
}

  return (
    <>
      <div>
        <hr />
        <label>テスト：日付</label>
        <hr />
        <div>
          <p>{employee.created_at}テスト：日時</p>
          <hr />
          <p id={employee.feedback_type}>{employee.content}テスト：内容</p>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="category"
          onChange={(e) => setSelect(e.target.value)}
          value="keep"
          checked={select === "keep"}
        />
        ポジティブ
        <input
          type="radio"
          name="category"
          onChange={(e) => setSelect(e.target.value)}
          value="problem"
        />
        ネガティブ
        <input
          type="radio"
          name="category"
          onChange={(e) => setSelect(e.target.value)}
          value="try"
        />
        その他
        <br />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit">
          投稿
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
