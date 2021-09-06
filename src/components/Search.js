import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element) => {

            let imageLink = "";

            if(element.show.image){
                imageLink = element.show.image.medium;
            }
            else {
                imageLink = "No image";
            }
            return (
                <div className="col-sm-2" onClick={props.onSelected} >
                    <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                        <img onClick={props.onSelected} selected={element.show} alt="No Image" className="shows" id={element.show.id} src={imageLink}/>
                        <p onClick={props.onSelected} selected={element.show} id={element.show.id}>{element.show.name}</p> 
                    </Link>
                </div>
            )
    
        })
    }
    else {
        display = props.result.show.image.medium;
    }

    return (
        <>  
            <Link to="/search">
                <div className="results">{display}</div>
                {/* {props.result.[0].show.summary} */}
                {/* <img src={props.result[0]}/> */}
                {/* <img src={props.result}/> */}
            </Link>
        </>
    )
}

export default Search;