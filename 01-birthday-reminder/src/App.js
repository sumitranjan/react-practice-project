
import './App.css';
import List from "./List";
import data from"./data"
import {  useState } from 'react';

function App() {
  const [people, setPeople ] = useState(data);

  return (
    <div className="App">
      <div className="card">
      <p className="txt">{people.length} birthdays today</p>
      <List data={people}/>
      <button 
      className="btn"
      onClick={()=>setPeople([])}
      >Clear All</button>
      </div>
    </div>
  );
}

export default App;
//
