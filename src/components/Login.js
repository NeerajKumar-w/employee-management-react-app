import React, { useReducer } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const initialState = { userName: '', passWord: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "passWord":
      return { ...state, passWord: action.payload };
    default:
      return state;
  }
};
const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const details = {
    userName: "Neeraj",
    passWord: "123"
  }
  return (
    <div className="Login">
      <div className="LoginBox">
        <form className="LoginForm">
          <div><h2>Login</h2></div>
          <div className="field">
            <div>UserName</div>
            <div><input placeholder="UserName" onChange={(e) => { dispatch({ type: 'userName', payload: e.target.value }) }} required /></div>
          </div>
          <div className="field">
            <div>PassWord</div>
            <div><input placeholder="PassWord" onChange={(e) => { dispatch({ type: 'passWord', payload: e.target.value }) }} required /></div>
          </div>
          <div><button type="button"onClick={() => {
            console.log(state);
            if(state.userName === details.userName && state.passWord === details.passWord){
              return navigate('/Employee');
            }
          }}>Login</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login;
