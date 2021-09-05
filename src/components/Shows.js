import React from "react";

const Shows = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element) => {
            return (
            <div>
                <img onClick={()=>console.log(element.show.name)} className="shows" key={Math.random()} src={element.show.image.medium}/>
                <p>{element.show.name}</p>
                {element.show.summary}
            </div>
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