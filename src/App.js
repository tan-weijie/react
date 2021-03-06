import React, { useState, useEffect } from "react";
import { Link, Switch, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Show from "./components/Show";
import Search from "./components/Search";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User";
import "./index.css";

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
      console.log("user added")
    }

    // Favourites
    const onFavourite = (inputFavourite) => {
        setFavourite((prevState) => {
          return [inputFavourite,...prevState]
      })
    }

    // Remove favourites
    const onRemove = (removeFav) => {
        setFavourite((prevFavourite) => [...prevFavourite.filter(el => el.id === removeFav)]);
        // setFavourite(favourite.filter(el => el.id == removeFav));
        console.log(favourite[0]);
        console.log(removeFav);
    }

    useEffect(() => {

    },[])
    
    return (
        <main> 
            <div className="header">
              <h1 >
                <Link className="title" exact to="/home">
                    TV Show App
                </Link>
              </h1>
              <Header onLogined={onLogined} onChange={onChange} onResult={onResult} onSubmit={onSubmit} value={input} result={result} logined={logined}/>
            </div>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route path="/search">
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
                <User logined={logined} onRemove={onRemove} favourite={favourite}/>
            </Route>
        </main>
    );
}

export default App;
