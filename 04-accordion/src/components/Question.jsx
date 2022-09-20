import React, { useState } from "react";
import "./Question.css";

const Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    function handleText(){

    }
  return (
    <div className="card">
      <div className="questionBox">
        <h4 className="title">{title}</h4>
        <button className="plusButton" onClick={()=>setShowInfo(!showInfo)}>
            {showInfo ? '-' : '+'}
            </button>
      </div>
      {showInfo && <p className="info"> {info}</p>}
    </div>
  );
};

export default Question;
