import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import employeeService from "../services/employeeService";
import FeedbackForm from "../components/FeedbackForm"
import "../App.css"

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // employeeService.jsを通じてAPIリクエストを送る
    employeeService.getDetail(id)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("情報の取得に失敗しました：", error));
  }, [id]);

  if (employee.length === 0) {
    return <div>情報読み込み中...</div>;
  }

  return (
    <>
      <button className="backbutton" onClick={() => navigate('/')}>戻る</button>
      <table className="employeedetail">
        <tr>
          <th>社員名</th>
          <td>{employee.name_kanji}</td>
          <td colspan="2" className="noborder"></td>
        </tr>
        <tr>
          <th>部署</th>
          <td>{employee.department}</td>
          <th>役職</th>
          <td>{employee.position}</td>
        </tr>
        <tr>
          <th>営業担当</th>
          <td>{employee.sales_kanji}</td>
          <td colspan="2" className="noborder"></td>
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
