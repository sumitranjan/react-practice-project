import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <div className="App">
      <div className="left">
        <p className="left-text">Questions And Answers About Login </p>
      </div>
      <div className="right">
        {questions.map((question)=>(
          <Question  key={question.id} {...question}/>
        ))}
      </div>
    </div>
  );
}

export default App;
