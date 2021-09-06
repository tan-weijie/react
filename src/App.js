import React, { useState, useEffect } from "react";
import { Link, Switch, Route, Router } from "react-router-dom";
import Form from "./components/Form";
import Show from "./components/Show";
import Search from "./components/Search";

function App() {

    const [input, setInput] = useState("");
    const [search, setSearch] = useState(input);
    const [result, setResult] = useState([]);
    const [show, setShow] = useState("");

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

    const onSelected = (e) => {
      setShow(e.target.selected);
      console.log("select", e.target.selected);
    }

    useEffect(() => {

    },[])
    
    return (
        <main>  
            <h1>
              <Link exact to="/home">
                TV Shows
              </Link>
            </h1>
            <Form onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result}/>
            <Route path="/search">
                <h1>Search Results:</h1>
                <Search result={result} onSelected={onSelected}/>
            </Route>
            <Route path="/shows/">
                <Show result={result} show={show}/>
            </Route>
        </main>
    );
}

export default App;
