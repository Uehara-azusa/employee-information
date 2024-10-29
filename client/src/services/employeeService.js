import Axios from 'axios';

// 社員情報一覧を取得する
const getEmployee = () => {
  return Axios.get("http://localhost:3001/api/employee");
};

// 遷移先ユーザー情報を取得する
const getDetail = (id) => {
  return Axios.get(`http://localhost:3001/api/detail/${id}`);
};

//フィードバックを取得する
const getFeedback = (id) => {
  return Axios.get(`http://localhost:3001/api/getFeedback/${id}`);
};

// フィードバックを追加する
const addFeedback = (id, employeeId, feedback_type, content) => {
  return Axios.post(`http://localhost:3001/api/addFeedback/${id}`, { employeeId, feedback_type, content });
};

const employeeService = {
  getEmployee,
  getDetail,
  getFeedback,
  addFeedback
};

export default employeeService;
