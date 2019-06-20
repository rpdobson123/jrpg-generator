import React from "react";
import dictionary from "./dictionary.js";
import scripts from "./scripts.js";
import "./App.css";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandom = (key, source = dictionary) => {
  if (key.charAt(0) === "*") return key.slice(1);
  return source[key][getRandomInt(0, source[key].length - 1)];
};

function App() {
  const introAtoms = getRandom("intro", scripts);
  const introText = introAtoms.map(atom => getRandom(atom)).join(" ");
  const titleAtoms = getRandom("title", scripts);
  const titleText = titleAtoms.map(atom => getRandom(atom)).join(" ");
  const features = new Array(getRandomInt(3, 6)).fill("").map(() =>
    getRandom("features", scripts)
      .map(atom => getRandom(atom))
      .join(" ")
  );
  return (
    <div className="App">
      <header className="App-header">
        <h3>{introText}</h3>
        <hr />
        <h2>{titleText}</h2>
        <ul>
          {features.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
