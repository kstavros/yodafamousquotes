import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import Yoda from "./Yoda";
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
        <h1>Yoda Brainz</h1>
        <Yoda />
        <Speak>This is where the quote will be</Speak>
      </div>
    </AppWrapper>
  );
}

export default App;
