import React, { useReducer } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const initialState = { name: "John", age: 30 };

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

function Login() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    return (
        <div className="LoginBg">
            <div className="LoginBox">
                <div><p className="LoginText">Login</p></div>
                <form className="LoginContainer">
                    <div className="Field">
                        <div className="fwidth"><label className="Label" htmlFor="">UserName</label></div>
                    <div className="fwidth"><input className="InputField" type="text" onChange={(e) => { dispatch({ type: 'userName', payload: e.target.value })} } required/></div>
                    </div>
                    <div className="Field">
                        <div className="fwidth"><label className="Label" htmlFor="">PassWord</label></div>
                        <div className="fwidth"><input className="InputField" type="password" onChange={(e) => { dispatch({ type: 'passWord', payload: e.target.value })} } required/></div>
                    </div>
                    <div><button className="LoginButton" type="submit" onClick={() => {
                    if (state.userName === 'neeraj' && state.passWord === '123') {
                        return navigate('/Employee');
                    }
                    else {
                        return;
                    }
                    }}>Login</button></div>
                </form>
            </div>
        </div>
    )
}

export default Login;
