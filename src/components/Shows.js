import React from "react";

const Shows = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element, index) => {
            return <img className="shows" key={Math.random()} src={element}/>
        })
    }
    else {
        display = props.result;
    }


    return (
        <>
            {display}
            {/* <img src={props.result[0]}/> */}
            {/* <img src={props.result}/> */}
        </>
    )
}

export default Shows;