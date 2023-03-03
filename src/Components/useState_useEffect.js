import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

function State() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`I'm ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`I'm ${secondary} right now`);
  }, [secondary]);

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button>
      <button onClick={() => setEmotion("worried")}>worried</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>grateful</button>
      <button onClick={() => setSecondary("tired")}>tired</button>
    </div>
  );
}

export default State;
