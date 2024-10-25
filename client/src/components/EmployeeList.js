import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //axiosInstance.jsを通じてAPIリクエストを送る
    axiosInstance
      .get('/employee')
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error('社員情報の取得に失敗しました：', error));
  }, []);

  return (
    <table border="1">
      <tr>
        <th>ID</th>
        <th>社員名</th>
        <th>担当営業</th>
        <th>情報共有ボタン</th>
      </tr>
      {employee.map((val) => (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>
            {val.name_kana}<br />
            {val.name_kanji}
            </td>
            <td>
            {val.sales_kana}<br />
            {val.sales_kanji}
            </td>
          <td><button onClick={() => navigate('/detail')}>共有情報</button></td>
          </tr>
      ))}
    </table>
  );
};

export default EmployeeList;
