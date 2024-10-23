import React from "react";

const EmployeeInfo = ({ employeeList }) => {
    return (
        <ul>
            {employeeList.map((val, index) => (
                <li key={index}>
                    <div className="user-info">
                        <span>名前:</span><span>{val.name}</span>
                    </div>
                    <div className="user-info">
                        <span>Email:</span><span>{val.email}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EmployeeInfo;
