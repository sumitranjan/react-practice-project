import React from "react";
import './App.css'

const List = ({ data }) => {
  return (
    <div>
      {data?.map((data) => (
        // <img src={data.image}/>
        <div className="box" key={data.id}>
          <img src={data.image}  className="imgDiv"/>
          <div className="text-container">
          <p className="name">{data.name}</p>
          <p className="age">{data.age} years</p>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default List;
