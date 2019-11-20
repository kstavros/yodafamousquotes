import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import "./App.css";
import Speak from "./components/Speak";

function App() {
  const [value, setValue] = useState("");
  return (
    <AppWrapper>
      <div className="App" style={{ padding: "0" }}>
        <h1>yoda app lol</h1>
        <img src="yodaswag.png" />
        <Quote>This is where the quote will be</Quote>
      </div>
    </AppWrapper>
  );
}

export default App;
