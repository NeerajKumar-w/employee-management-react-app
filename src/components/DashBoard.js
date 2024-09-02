import React from "react";
import { Link } from "react-router-dom";
import './DashBoard.css';

function DashBoard(props){
    return(
      <div className="DashBoard">
        <div className="NavBar">
          <div className="ButtonContainer">
            <div className="DashBoardButton" onclick={props.handleClick}><Link to="/Employee" className="Links">Employee</Link></div>
            <div className="DashBoardButton" onclick={props.handleClick}><Link to="/Tasks" className="Links">Tasks</Link></div>
            <div className="DashBoardButton" onclick={props.handleClick}><Link to="/Resources" className="Links">Resources</Link></div>
          </div>
        </div>
      </div>
    )
}

export default DashBoard;
