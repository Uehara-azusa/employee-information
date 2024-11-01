import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeeList from "../components/EmployeeList";
import EmployeeDetail from "../components/EmployeeDetail";

function EmployeePage() {
  return (
    <div>
      <Routes>
        {/* 画面遷移のルート設定 */}
        <Route path="/" element={<EmployeeList />} />
        <Route path="/detail/:id" element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
}
export default EmployeePage;
