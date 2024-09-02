import { useState } from "react";
import { database, ref, set } from "../configuration";
import { useNavigate } from "react-router-dom";
import { push } from "../configuration.js";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({EmployeeID : '', EmployeeName : '', EmployeeDesignation: ''})
  const handleSubmit = () => {
    const EmployeeRef = ref(database, 'Employees/');
    const newEmployeeRef = push(EmployeeRef);
    if(employeeDetails.EmployeeID !== '' && employeeDetails.EmployeeName !== '' && employeeDetails.EmployeeDesignation !== ''){
      set(newEmployeeRef, {
        EmployeeID : employeeDetails.EmployeeID,
        EmployeeName : employeeDetails.EmployeeName,
        EmployeeDesignation : employeeDetails.EmployeeDesignation
      }).then(() => {
          console.log("Data Posted Successfully")
          employeeDetails.EmployeeID = '';
          employeeDetails.EmployeeName = '';
          employeeDetails.EmployeeDesignation = '';
          return navigate('/Employee');
        })
        .catch((error) => {
          console.error("Error Posting Data :", error);
        })
    }
    console.log(employeeDetails);
  }
  return (
    <div className="EmployeeForm">
      <div className="EmployeeFormField">
        <div><label>EmployeeID</label></div>
        <div><input placeholder="EmployeeID" type="text" required onChange={(e) => {setEmployeeDetails({...employeeDetails, EmployeeID: e.target.value})}}/></div>
      </div>
      <div className="EmployeeFormField">
        <div><label>EmployeeName</label></div>
        <div><input placeholder="EmployeeName" type="text" onChange={(e) => {setEmployeeDetails({...employeeDetails, EmployeeName: e.target.value})}} required/></div>
      </div>
      <div className="EmployeeFormField">
        <div><label>EmployeeDesignation</label></div>
        <div><input placeholder="EmployeeDesignation" type="text" onChange={(e) => {setEmployeeDetails({...employeeDetails, EmployeeDesignation: e.target.value})}} required/></div>
      </div>
      <div><button>Cancel</button><button onClick={handleSubmit}>Submit</button></div>
    </div>
  )
}

export default EmployeeForm;
