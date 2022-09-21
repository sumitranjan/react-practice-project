import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu-container">
      {menuItems.map((item) => {
        const { id, title, img, price, desc } = item;
        return (
          <div className="menu-card" key={id}>
            <div className="image-container">
              <img className="image" src={img} alt={title} />
            </div>
            <div className="text-container">
              <div className="title-price-container">
                <p className="title">{title}</p>

                <p className="price">$ {price}</p>
              </div>
              <div className="horizontal"></div>
              <div className="info">{desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
