const db = require("../db/connection");

// 全ユーザーを取得する
const getUsers = (req, res) => {
  const sqlSelect =
    `SELECT
      employees.id,
      employees.name_kanji,
      employees.name_kana,
      sales.name_kanji,
      sales.name_kana,
      feedback.created_at
    FROM employees
    left join sales on sales.id = employees.sales_contact
    left join feedback on feedback.employee_id = employees.id`;
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error retrieving users from the database");
        } else {
            res.send(result);
        }
    });
};

module.exports = { getUsers };
