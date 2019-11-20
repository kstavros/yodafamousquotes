import React, { useState, useEffect } from "react";
import AppWrapper from "./AppWrapper";
import Quote from "./Quote";
import Yoda from "./Yoda";
import "./App.css";
import Speak from "./components/Speak";
import { yodaTranslate, getQuiz } from "./calls";

function App() {
  const [value, setValue] = useState({ quote: "loading", correct: "loading" });

  useEffect(async () => {
    const result = await getQuiz();
    setValue(result);
  }, []);
  return (
    <AppWrapper>
      <div className="App" style={{ padding: "0" }}>
        <h1>Yoda Brainz</h1>
        <Yoda />
        <Speak>{!!value.quote ? value.quote : "loading"}</Speak>
        <h2>{!!value.quote ? "Author: " + value.correct : "loading"}</h2>
        <button onClick={async () => setValue(await getQuiz())}> Try Again</button>
      </div>
    </AppWrapper>
  );
}

export default App;
