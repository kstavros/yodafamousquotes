import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import "./App.css";
import Speak from "./components/Speak";
import { yodaTranslate } from "./calls";

function App() {
  const [value, setValue] = useState("");
  return (
    <AppWrapper>
      <div className="App" style={{ padding: "0" }}>
        <h1>yoda app lol</h1>
        <img src="yodaswag.png" />
        <Speak>This is where the quote will be</Speak>
      </div>
    </AppWrapper>
  );
}

export default App;
