import Axios from 'axios';

// Axiosのインスタンスを作成
const api = Axios.create({
  baseURL: 'http://localhost:3001/api', // APIサーバーのベースURL
  headers: {
    'Content-Type': 'application/json',// 送受信されるデータの形式を指定
  },
});

export default api;
