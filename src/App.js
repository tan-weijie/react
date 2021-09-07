import React, { useState, useEffect } from "react";
import { Link, Switch, Route, Router } from "react-router-dom";
import Form from "./components/Form";
import Show from "./components/Show";
import Search from "./components/Search";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User";

function App() {

    const [input, setInput] = useState("");
    const [search, setSearch] = useState(input);
    const [result, setResult] = useState([]);
    const [show, setShow] = useState("");
    const [logined, setLogined] = useState(null);
    const [favourite, setFavourite] = useState([{}])

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
    
    // Login
    const onLogined = (inputLogin) => {
      setLogined(inputLogin);
      console.log(inputLogin);
    }
    
    // Sign Up
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

    // Favourites
    const onFavourite = (inputFavourite) => {
        setFavourite((prevState) => {
          return [inputFavourite,...prevState]
      })
      console.log("favourite",favourite);
    }

    useEffect(() => {

    },[])
    
    return (
        <main>  
            <h1>
              <Link exact to="/home">
                TVClone
              </Link>
            </h1>
            <Form onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result} logined={logined}/>
            <Route path="/search">
                <h1>Search Results:</h1>
                <Search result={result} onSelected={onSelected}/>
            </Route>
            <Route path="/shows/">
                <Show result={result} show={show} onFavourite={onFavourite}/>
            </Route>
            <Route path="/login/">
                <Login onLogined={onLogined}/>
            </Route>
            <Route path="/signup/">
                <SignUp onSignUp={onSignUp}/>
            </Route>
            <Route path="/user/">
                <User logined={logined} favourite={favourite}/>
            </Route>
        </main>
    );
}

export default App;
