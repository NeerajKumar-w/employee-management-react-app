import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


const EmployeeForm = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({EmployeeID : '', EmployeeName : '', EmployeeDesignation: ''});
  const handleSubmit = async () => {
    try{
      await setDoc(doc(db, "Employees", employeeDetails.EmployeeID), {
        EmployeeName: employeeDetails.EmployeeName,
        EmployeeID: employeeDetails.EmployeeID,
        EmployeeDesignation: employeeDetails.EmployeeDesignation,
      });
      return navigate('/Employee');
    }
    catch(error){
      console.log(error);
    }
    finally{
      console.log(employeeDetails);
    }
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
