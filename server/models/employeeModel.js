const database = require("../config/database");

const employeeModel = {
  // すべての社員情報を取得するメソッド
  getAll: (callback) => {
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
      if (err) return callback(err, null);
      return callback(null, result);
    });
  },

  // 社員IDごとに詳細情報を取得するメソッド
  getDetailById: (employeeId, callback) => {
    const sqlSelect = `select
    employees.name_kanji,
    employees.department,
    employees.position,
    sales.name_kanji as sales_kanji
    from employees
    left join sales on sales.id = employees.sales_contact
    where employees.id = ?`;

    database.query(sqlSelect, [employeeId], (err, result) => {
      if (err) return callback(err, null);
      return callback(null, result.length > 0 ? result[0] : null);
    });
  },
};

module.exports = employeeModel;
