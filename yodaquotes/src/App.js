import React, { useEffect, useState } from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import Yoda from "./Yoda";
import "./App.css";
import { yodaTranslate, getQuiz } from "./calls";

function App() {
  useEffect(async () => {
    //const result = await getQuiz();
    //console.log(result);
  }, []);
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
