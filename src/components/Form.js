import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Form = (props) => {

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

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Search for show." value={props.value}/>
                <button onSubmit={handleSubmit}>
                    <Link to="/search">
                        Search
                    </Link>
                </button>
            </form>
          
            {props.logined ? <Link to="/user">{props.logined}</Link>: <Link to="/login">Login</Link>}
            {props.logined ? <>Log Out</> : <Link to="/signup">Sign Up</Link>}
        </div>
    )
}

export default Form;