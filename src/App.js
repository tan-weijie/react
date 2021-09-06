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

    const onSelected = (selectedShow) => {
      setShow(selectedShow);
      console.log("select",show);
    }

    useEffect(()=>{

    },[])
    
    return (
        <>  
            <h1><Link to="/home">TV Shows</Link></h1>
            <Form onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result}/>
            <Route path="/search">
                <h1>Search</h1>
                <Search result={result} onSelected={onSelected}/>
            </Route>
            <Route path="/shows/">
                <h1>Show</h1>
                <Show result={result} show={show}/>
            </Route>
        </>
    );
}

export default App;
