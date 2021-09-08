import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    const handleSubmit = async (e) => {
         
        e.preventDefault();
        props.onSubmit();
        // props.onChange(""); //reset input field
        // console.log(input);

        const url = "https://api.tvmaze.com/search/shows?q=";

        try{
            // let res = await fetch(url + props.value);
            let res = await fetch(url + `${props.value}`)
            res = await res.json();
            // const link = res[0].show.image.medium;
            // console.log("THIS", res[1].show.image.original);
            // console.log("THAT", res[1])
            props.onResult(res);
            props.onChange(""); //resets input field
            // console.log(link);
        }
        catch(err){
            console.log("ERROR", err);
        }
    }

    const handleLogout = () => {
        props.onLogined(null);
    }

    return(
        <div>
            <form class="row" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input onChange={handleChange} type="text" placeholder="Search for show." value={props.value}/>
                    <Link to="/search" onClick={handleSubmit} className="input-group-text" id="basic-addon2">
                       <Link to="/search">
                             Search
                        </Link>
                    </Link>
                    {/* <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}> */}
                    {/* </button> */}
                    {props.logined ? <Link className="input-group-text" to="/user">{props.logined}</Link>: <Link className="input-group-text" to="/login">Login</Link>}
                    {props.logined ? <Link className="input-group-text" to="/home" onClick={handleLogout}>Log Out</Link> : <Link className="input-group-text" to="/signup">Sign Up</Link>}
                </div>
            </form>
        </div>
    )
}

export default Header;