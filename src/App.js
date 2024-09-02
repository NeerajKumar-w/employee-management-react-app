import './App.css';
import Login from './components/Login';
import Employee from './components/Employee';
import Tasks from './components/Tasks';
import Resources from './components/Resources';
import DashBoard from './components/DashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="Employee" element={<Employee />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="EmployeeForm" element={<EmployeeForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
