import EmployeeCard from "./EmployeeCard";
import './Employee.css';
import FilterImg from '../Assets/filter.png';
import SortImg from '../Assets/sort.png';
import AddImg from '../Assets/add.png';
import RemoveImg from '../Assets/remove.png';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DashBoard from "./DashBoard.js";
import {database, set, ref, onValue } from '../configuration.js';
import { useNavigate } from "react-router-dom";

function EmployeeButton(props) {
  const navigate = useNavigate()
  return (
    <div className="EmployeeButtons">
      <div className="EmployeeButtonContainer">
        <div><button className="EmployeeButton" onClick={() => {return navigate('/EmployeeForm');}}>+</button></div>
        <div><button className="EmployeeButton">-</button></div>
      </div>
    </div>
  )
}

function Employee(props) {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    // Reference to the 'users' node in the database
    const usersRef = ref(database, 'Employees');
    const employeesArray = [];
    // Listen for real-time updates
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      for (let key in data){
        employeesArray.push(data[key])
      }
      console.log(employeesArray);
      setEmployees(employeesArray || []);
      console.log(employees)
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(()=>{
    console.log(employees[0])
  },[employees])


 // console.log(employees);
  return (
    <div className="Employee">
      <DashBoard />
      <div className="EmployeeContainer">
      <EmployeeButton/>
      <div className="EmployeeGrid">
        {
          employees.map((emp) => {
            return <EmployeeCard EmployeeID={emp.EmployeeID} EmployeeName={emp.EmployeeName} EmployeeDesignation={emp.EmployeeDesignation} />
          })
        }
      </div>
      </div>
    </div>
  );
}

export default Employee;

