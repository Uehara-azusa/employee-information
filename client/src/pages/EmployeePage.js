import React from "react";

const EmployeePage = ({ categoryList }) => {
  return (
    <table border="1">
      <tr>
        <th>ID</th>
        <th>社員名</th>
        <th>営業担当</th>
        <th>投稿数</th>
        <th>最終投稿情報</th>
        <th>共有情報ボタン</th>
      </tr>
      {categoryList.map((val, index) => (
        <>
          <tr key={index}>
            <td>{val.id}</td>
            <td>
              {val.name_kanji}
              <br />
              {val.name_kana}
            </td>
            <td>
              {val.salse.kanji}
              <br />
              {val.sales.kana}
            </td>
            <td></td>
            <td>
              {val.created_at}
              <br />
              {val.name_kanji}
            </td>
            <td>
              <button>共有情報</button>
            </td>
          </tr>
        </>
      ))}
    </table>
  );
};

// <li key={index}>
//     <div className="user-info">
//         <span>名前:</span><span>{val.name}</span>
//     </div>
//     <div className="user-info">
//         <span>Email:</span><span>{val.email}</span>
//     </div>
// </li>
//       ))
//   );
// };

export default EmployeePage;
