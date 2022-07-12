import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [advice, setadvice] = useState(
    "click Get Advice Button for Getting Advice"
  );

  const refreshadvice = async () => {
    const api = "https://api.adviceslip.com/advice";

    const x = await fetch(api);
    const y = await x.json();
    const dataa = y.slip.advice;

    setadvice(dataa);
  };
  return (
    <>
      <div className="card">
        <p className="advicetext">{advice}</p>
        <button className="btn" onClick={refreshadvice}>
          Get Advice
        </button>
      </div>
    </>
  );
};

export default App;
