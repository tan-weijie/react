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
                // <div className="col-sm-2" onClick={props.onSelected} >
                //     <Link to={`/shows/${element.show.id}/${element.show.name}`}>
                //         <img onClick={props.onSelected} selected={element.show} alt="No Image" className="shows" id={element.show.id} src={imageLink}/>
                //         <p onClick={props.onSelected} selected={element.show} id={element.show.id}>{element.show.name}</p> 
                //     </Link>
                // </div>
                    <div className="card col-sm-3" onClick={props.onSelected}>
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
            <Link to="/search">
                <div className="row">{display}</div>
            </Link>
        </>
    )
}

export default Search;