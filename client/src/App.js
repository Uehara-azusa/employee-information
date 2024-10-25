import React from "react";
import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import useCategories from "./hooks/useCategories";
// import UserForm from "./components/UserForm";
// import apiService from "./services/apiService";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <BrowserRouter ClassName="App">
      <EmployeePage />
    </BrowserRouter>
  );
    // const { categoryList, refreshCategories } = useCategories();

    // const addUser = (name, email) => {
    //     apiService.addUser(name, email)
    //         .then(() => {
    //             alert("User added successfully");
    //             refreshCategories();
    //         })
    //         .catch(err => {
    //             console.error("Error adding user: ", err);
    //             alert("Failed to add user");
    //         });
    // };

    // return (
    //     <div className="App">
    //         <UserForm addUser={addUser} />
    //         <EmployeeList categoryList={categoryList} />
    //     </div>
    // );
}

export default App;
