import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(amount);
    if (count < 1) {
      alert(
        "Input number can't be less than 1. So, generating 1 paragragph by default"
      );
      amount = 1;
    }
    if (count > 9) {
      amount = 9;
      alert(
        "Input number can't be greater than 9. So, generating maximum 9 paragragph"
      );
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="App">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
