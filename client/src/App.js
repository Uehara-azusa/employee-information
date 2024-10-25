import React from "react";
// import './App.css';
// import useCategories from "./hooks/useCategories";
// import UserForm from "./components/UserForm";
// import apiService from "./services/apiService";
// import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
  return (
    <div ClassName="App">
      <EmployeeDetail />
    </div>
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
