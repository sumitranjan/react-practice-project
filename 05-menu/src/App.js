import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data.js";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category)=>{
    if(category=='all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=>item.category == category)
    setMenuItems(newItems);
  }
  return (
    <div className="App">
      <div className="heading">Our Menu</div>
      <div className="horizontal-line"></div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
