import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    //axiosInstance.jsを通じてAPIリクエストを送る
    axiosInstance
      .get('/detail')
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error('情報の取得に失敗しました：', error));
  }, []);

  if (employee.length === 0) {
    return <div>情報読み込み中...</div>
  }

  // const employeeList = employee;
  console.log(employee);
  return (
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
  );
};

export default EmployeeDetail;
