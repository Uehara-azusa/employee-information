import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

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
        <th>社員名</th>
        <th>社員名ふりがな</th>
        <th>担当営業</th>
        <th>担当営業ふりがな</th>
        <th>部署</th>
        <th>役職</th>
      </tr>
      {employee.map((val) => (
          <tr key={val.id}>
            <td>{val.name_kanji}</td>
            <td>{val.name_kana}</td>
            <td>{val.sales_kanji}</td>
            <td>{val.sales_kana}</td>
            <td>{val.department}</td>
            <td>{val.position}</td>
          </tr>
      ))}
    </table>
  );
};

export default EmployeeList;
