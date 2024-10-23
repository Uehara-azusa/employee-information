import React from "react";

const EmployeeList = ({ employeeList }) => {
  return (
    <ul>
      {employeeList.map((val, index) => (
        <table border="1" key={index}>
          <tr>
            <th>ID</th>
            <th>社員名</th>
            <th>営業担当</th>
            <th>投稿数</th>
            <th>最終投稿情報</th>
            <th>共有情報ボタン</th>
          </tr>
          <tr>
            <td>{val.id}</td>
            <td>
              {val.name_kana}
              <br />
              {val.name_kana}
            </td>
            <td>
              {val.sales_kanji}
              <br />
              {val.sales_kana}
            </td>
            <td></td>
            <td>
              {val.created_ad}
              <br />
              {val.name_kanji}
            </td>
            <td>
              <button>共有情報</button>
            </td>
          </tr>
        </table>

        // <li key={index}>
        //     <div className="user-info">
        //         <span>名前:</span><span>{val.name}</span>
        //     </div>
        //     <div className="user-info">
        //         <span>Email:</span><span>{val.email}</span>
        //     </div>
        // </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
