import React from "react";
import Tour from "./Tour";
import "./Tours.css";

const Tours = ({ tours ,removeTour }) => {
  return (
    <div>
      <div className="title">
        <p className="tourHeading">Our Tours</p>
        <div className="horizontal-line"></div>
      </div>

      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour ={removeTour }/>
      ))}
    </div>
  );
};

export default Tours;
