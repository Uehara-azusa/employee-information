import React, { useState, useEffect } from "react";

const FeedbackForm = (addFeedback) => {
  const [select, setSelect] = useState("keep");
  const [feedback, setFeedback] = useState();
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      setDate(year + "年" + month + "月" + day + "日");

      let hour = d.getHours().toString().padStart(2, "0");
      let minute = d.getMinutes().toString().padStart(2, "0");
      setTime(hour + ":" + minute);
    }, 1000);
  });

  const datetime = { date } + { time };

  return (
    <form>
      <input type="radio" name="category" onChange={(e) => setSelect(e.target.value)} value="keep" checked={select === "keep"} />
        ポジティブ
        <input type="radio" name="category"onChange={(e) => setSelect(e.target.value)} value="problem" />
        ネガティブ
        <input type="radio" name="category"onChange={(e) => setSelect(e.target.value)} value="try" />
        その他
        <br />
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
      <input type="submit" onClick={() => addFeedback(select, feedback, datetime)}/>
    </form>
  );
};

export default FeedbackForm;
