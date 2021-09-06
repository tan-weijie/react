import React from "react";
import { Link } from "react-router-dom";
import "./Shows.css";

const Shows = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element) => {
            if(element.show.image){
                return (
                    <>
                        <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                            <div className="row">
                                <img onClick={()=>console.log(element.show.name)} alt="" className="shows" key={Math.random()} src={element.show.image.medium}/>
                                <p>{element.show.name}</p> 
                            </div>
                        </Link>
                        {/* {element.show.summary} */}
                    </>
               
                    )
            } else {
                return (
                    <>
                        <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                            <div className="row">
                                <img onClick={()=>console.log(element.show.name)} alt="No Image" className="shows" key={Math.random()} src="No Image"/>
                                <p>{element.show.name}</p>
                            </div>        
                        </Link>
                        {/* {element.show.summary} */}
                    </>
                )
           
            }
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

export default Shows;