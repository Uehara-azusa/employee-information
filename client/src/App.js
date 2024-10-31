import React from "react";
import { BrowserRouter } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <BrowserRouter ClassName="App">
      <EmployeePage />
    </BrowserRouter>
  );
}

export default App;
