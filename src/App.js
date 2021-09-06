import React, { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Form from "./components/Form";
import Selected from "./components/Selected";
import Shows from "./components/Shows";

function App() {

  const [input, setInput] = useState("");
  const [search, setSearch] = useState(input);
  const [result, setResult] = useState([]);

  const onChange = (valueInput) => {
    setInput(valueInput);
  }

  const onSubmit = () => {
    setSearch(input)
    // console.log(result);
  }

  const onResult = (inputResult) => {
    setResult(inputResult);
  }

  return (
    <>  
      <h1>TV Shows</h1>
      <Form onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result}/>
      <h1>Search</h1>
      <Shows result={result}/>
      <Selected/>
    </>
  );
}

export default App;
