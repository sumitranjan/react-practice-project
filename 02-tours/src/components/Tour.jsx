import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <div className="namePriceContainer">
        <h4>{name}</h4>
        <p className="price">$ {price}</p>
      </div>
      <p className="text">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="showBtn" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className="btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
