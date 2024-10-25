const database = require("../config/database");

//社員情報を取得する
const getEmployee = (req, res) => {
  const sqlSelect = `select
	employees.id,
	employees.name_kanji,
    employees.name_kana,
    sales.name_kanji as sales_kanji,
    sales.name_kana as sales_kana,
    employees.department,
    employees.position
  from employees
  left join sales on sales.id = employees.sales_contact`;
  database.query(sqlSelect, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving info from the database");
    } else {
      res.send(result);
    }
  });
};

// 遷移先ユーザー情報を取得する
const getDetail = (req, res) => {
  const sqlSelect = `select
	employees.name_kanji,
    employees.department,
    employees.position,
    sales.name_kanji as sales_kanji
  from employees
  left join sales on sales.id = employees.sales_contact`;
  database.query(sqlSelect, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving users from the database");
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  getEmployee,
  getDetail
};
