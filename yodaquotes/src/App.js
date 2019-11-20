import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { yodaTranslate } from "./calls";

function App() {
  return (
    <div className="App">
      <h1>yoda app lol</h1>
      <img src="yodaswag.png" />
      <button onClick={async () => console.log(await yodaTranslate("You should translate this."))}>Click me</button>
    </div>
  );
}

export default App;
