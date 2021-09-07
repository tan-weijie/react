import React, { useState, useEffect } from "react";
import { Link, Switch, Route, Router } from "react-router-dom";
import Form from "./components/Form";
import Show from "./components/Show";
import Search from "./components/Search";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

    const [input, setInput] = useState("");
    const [search, setSearch] = useState(input);
    const [result, setResult] = useState([]);
    const [show, setShow] = useState("");
    const [logined, setLogined] = useState(false);
    const [signUp, setSignUp] = useState([{user: "hello", email: "hello@", password: "hello"}]);

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

    //Sign Up
    const onSignUp = (newUser) => {
      const storage = window.localStorage;
      const allUser = [];
      allUser.push(newUser)
      storage.setItem(newUser.user, JSON.stringify(allUser));
      // setSignUp(newUser);
      console.log(storage.getItem('hello'))
      console.log(storage.getItem("byebye"))
      console.log("user added")
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
            <Route path="/login/">
                <Login signUp={signUp}/>
            </Route>
            <Route path="/signup/">
                <SignUp onSignUp={onSignUp}/>
                {signUp[0].user}
                <br/>
                {signUp[0].email}
                <br/>
                {signUp[0].password}
            </Route>
        </main>
    );
}

export default App;
