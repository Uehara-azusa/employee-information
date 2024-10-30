import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../services/employeeService";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //employeeService.jsを通じてAPIリクエストを送る
    employeeService
      .getEmployee()
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("社員情報の取得に失敗しました：", error));
  }, []);

  return (
    //社員情報一覧リストの表示設定
    <table border="1" className="employeelist">
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
            {val.name_kana}
            <br />
            {val.name_kanji}
          </td>
          <td>
            {val.sales_kana}
            <br />
            {val.sales_kanji}
          </td>
          {/* URLの最後にデータベースの社員IDの数字を付与してそれぞれの情報とリンクさせる */}
          <td>
            <button onClick={() => navigate(`/detail/${val.id}`)}>
              共有情報
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default EmployeeList;
