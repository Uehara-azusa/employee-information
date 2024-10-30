import Axios from 'axios';

// 社員情報一覧を取得する
const getEmployee = () => {
  return Axios.get("http://localhost:3001/api/employee");
};

// 社員ID別に遷移先社員情報を取得する
const getDetail = (id) => {
  return Axios.get(`http://localhost:3001/api/detail/${id}`);
};

// 社員ID別にフィードバック情報を取得する
const getFeedback = (id) => {
  return Axios.get(`http://localhost:3001/api/getFeedback/${id}`);
};

// フィードバック情報を追加する
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
