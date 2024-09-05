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
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../firebase";
import { collection, getDocs,  getDoc, deleteDoc } from "firebase/firestore";
import { query, onSnapshot } from "firebase/firestore";


function EmployeeButton(props) {
  const navigate = useNavigate()
  return (
    <div className="EmployeeButtons">
      <div className="EmployeeButtonContainer">
        <div><button className="EmployeeButton" onClick={() => {return navigate('/EmployeeForm');}}>+</button></div>
        <div><button className="EmployeeButton" onClick={props.handleClick}>-</button></div>
      </div>
    </div>
  )
}


function Employee() {
  const [popUpState, setPopUp] = useState(false);
  const [employees, setEmployees] = useState([]);

  function PopUp(props){
  const [EmployeeID, setID] = useState('');
  const redirect = useNavigate();
  const handleDelete = () => {
    async function deleteEmployee(){
      try{
        const docRef = doc(db, "Employees", EmployeeID);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          await deleteDoc(docRef);
          return;
        }
        else{
          throw("Employee Dosen't Exist");
        }
      }
      catch(error){
        console.log(error);
        return;
      }
      finally{
        return;
      }
    }
    deleteEmployee();
    setPopUp(false);
  }
  if(!props.show){
    return null;
  }
  return(
    <div className="PopUp">
      <div className="PopUpBox">
        <div><h1>Delete Employee</h1></div>
        <div style={{width:'100%',display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><input className="PopUpInput" placeholder="EmployeeID" onChange={(e) => {setID(e.target.value)}}/></div>
        <div><button className="PopUpButton" onClick={handleDelete}>Delete</button></div>
      </div>
    </div>
  )
}



  async function fetchEmployees(){
    try{
      const q = query(collection(db, "Employees"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setEmployees(data);
      return unsubscribe;
      });
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchEmployees();
  }, []);
  const closePopUp = () => {setPopUp(false)};
  return (
    <div className="Employee">
      <PopUp show={popUpState} onClose={closePopUp}/>
      <DashBoard />
      <div className="EmployeeContainer">
      <EmployeeButton handleClick={() => {setPopUp(true)}}/>
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

