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
    // データベースの社員IDごとにフィードバックデータを取得する
    employeeService
      .getFeedback(id)

      .then((response) => {
        // Object.groupBy()で日付ごとにグループ化
        const result = Object.groupBy(response.data, (item) => {
          // 指定した日付の表示になるように設定
          const today = new Date(item.created_at);
          const year = today.getFullYear();
          const month = today.getMonth() + 1;
          const day = today.getDate();
          return `${year}年${month}月${day}日`;
        });
        setEmployee(result);
      })

      .catch((error) =>
        console.error("フィードバック情報の取得に失敗しました：", error)
      );
  }, [id]);

  // onSubmit時の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ
    // 追加するデータを指定する
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

  // 各条件ごとのテキストカラー指定
  function feedbackColor(type) {
    return type === "keep"
      ? "#00BFFF"
      : type === "problem"
      ? "red"
      : type === "try"
      ? "black"
      : "black"; // デフォルトカラー
  }

  return (
    <>
      {/* データベースのフィードバック情報の表示設定 */}

      <div className="feedbacklist">
        {/* グループ化したオブジェクトを配列に変換し日付とフィードバック情報を表示 */}
        {Object.entries(employee).map(([date, feedbackList]) => {
          return (
            <>
              <div className="datefield">
                <hr className="frontline" />
                {/* 配列内の異なる日付を1つずつ表示 */}
                <p className="datetext">{date}</p>
                <hr className="backline" />
              </div>
              {/* 配列に直したものからそれぞれの情報を抜き出し、mapを使って全て表示する */}
              {feedbackList.map((item) => {
                // 指定した日付の表示になるように設定
                const today = new Date(item.created_at);
                const month = today.getMonth() + 1;
                const day = today.getDate();
                const h = today.getHours();
                const mm = today.getMinutes();

                return (
                  <div className="feedbackbox">
                    {/* 日時の設定 */}
                    <p className="todaydate">
                      {month + "月" + day + "日 " + h + ":" + mm}
                    </p>
                    <hr className="displayline" />
                    {/* テキストカラーとテキストの設定 */}
                    <p
                      className="feedbackdate"
                      id={item.feedback_type}
                      style={{ color: feedbackColor(item.feedback_type) }}
                    >
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
      <hr className="feedbackline" />
      {/* フィードバック情報の送信設定 */}
      <form onSubmit={handleSubmit}>
        {/* ラジオボタンの設定 */}
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
          {/* テキストエリアの設定 */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          {/* 投稿ボタンの設定 */}
          <button type="submit" className="submitbuton">
            投稿
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
