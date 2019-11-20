import React from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import Yoda from "./Yoda";
import "./App.css";
import { yodaTranslate } from "./calls";

function App() {
  return (
    <AppWrapper>
      <div className="App" style={{ padding: "0" }}>
        <h1>Yoda Brainz</h1>
        <Yoda />
        <Quote>This is where the quote will be</Quote>
      </div>
    </AppWrapper>
  );
}

export default App;
