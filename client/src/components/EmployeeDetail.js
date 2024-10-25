import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance";
import FeedbackForm from "../components/FeedbackForm"

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //axiosInstance.jsを通じてAPIリクエストを送る
    axiosInstance
      .get("/detail")
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("情報の取得に失敗しました：", error));
  }, []);

  if (employee.length === 0) {
    return <div>情報読み込み中...</div>;
  }

  return (
    <>
      <button onClick={() => navigate('/')}>戻る</button>
      <table border="1">
        <tr>
          <th>社員名</th>
          <td>{employee[0].name_kanji}</td>
        </tr>
        <tr>
          <th>部署</th>
          <td>{employee[0].department}</td>
          <th>役職</th>
          <td>{employee[0].position}</td>
        </tr>
        <tr>
          <th>営業担当</th>
          <td>{employee[0].sales_kanji}</td>
        </tr>
        <tr>
          <th>直属上司</th>
          <td>　　　　　</td>
          <th>査定実施者</th>
          <td>　　　　　</td>
        </tr>
      </table>
      <FeedbackForm />
    </>
  );
};

export default EmployeeDetail;
