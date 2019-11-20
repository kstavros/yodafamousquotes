import React, { useState } from "react";
import "./App.css";
import Speak from "./components/Speak";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Speak text={value} />
      <h1>yoda app lol</h1>
      <img src="yodaswag.png" />
    </div>
  );
}

export default App;
