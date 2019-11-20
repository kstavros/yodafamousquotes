import React from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import "./App.css";
import { yodaTranslate } from "./calls";

function App() {
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
