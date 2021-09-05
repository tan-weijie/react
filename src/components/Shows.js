import React from "react";
import { Link } from "react-router-dom";

const Shows = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element) => {
            return (
            <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                <img onClick={()=>console.log(element.show.name)} className="shows" key={Math.random()} src={element.show.image.medium}/>
                <p>{element.show.name}</p>
                {/* {element.show.summary} */}
            </Link>
            )
        })
    }
    else {
        display = props.result.show.image.medium;
    }


    return (
        <>
            <h1>Search</h1>
            <div className="results">{display}</div>
            {/* {props.result.[0].show.summary} */}
            {/* <img src={props.result[0]}/> */}
            {/* <img src={props.result}/> */}
        </>
    )
}

export default Shows;