import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Search = (props) => {

    let display;

    if (Array.isArray(props.result)){
        display = props.result.map((element) => {

            let imageLink = "";

            if(element.show.image){
                imageLink = element.show.image.medium;
            }
            else {
                imageLink = `https://via.placeholder.com/210x295?text=${element.show.name}`;
            }
            return (
                // <div className="col-sm-2" onClick={props.onSelected} >
                //     <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                //         <img onClick={props.onSelected} selected={element.show} alt="No Image" className="shows" id={element.show.id} src={imageLink}/>
                //         <p onClick={props.onSelected} selected={element.show} id={element.show.id}>{element.show.name}</p> 
                //     </Link>
                // </div>
                <div className="card col-sm-3">
                    <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                        <img src={imageLink} onClick={props.onSelected} id={element.show.id} selected={element.show} class="card-img-top" alt={element.show.name}/>
                        <div class="card-body">
                            <h5 class="card-title" onClick={props.onSelected} selected={element.show}>{element.show.name}</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Add to favourite</a> */}
                        </div>
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
            {display.length !== 0  ? <h3 className="white">Search Results:</h3> : <h3 className="white">Search Results: No Shows found.</h3>}
            <div className="row">{display}</div>
        </>
    )
}

export default Search;