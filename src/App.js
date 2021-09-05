import React, { useState } from "react";
import Form from "./components/Form";
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
    console.log(result);
  }

  const onResult = (inputResult) => {
    setResult(inputResult);
  }

  return (
    <>  
      <h1>API Fetch</h1>
      <Form onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result}/>
      <Shows result={result}/>
    </>

  );
}

export default App;
