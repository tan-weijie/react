import React, {useState} from 'react';


const Show = (props) => {

    const selected = props.show;

    

    const handleFavourite = (e) => {
        e.preventDefault();
        props.onFavourite(selected);
        // console.log("fav", favourite)
    }

    return (
        <article className="row">
            <div className="row">
                <h2>{selected.name}</h2>
                <div className="col-3 d-grid gap-2">
                    {selected.image ? <img src={selected.image.medium}/> : <img src="https://via.placeholder.com/210x295?text=No+Image"/>}
                    <button className="btn btn-primary" onClick={handleFavourite}>Add to Favourites</button>
                </div>
            </div>
     
            <div className="row">
           
                {selected.officialSite && <a href={selected.officialSite} target="_blank">Official Site</a>}
                <p> 
                    <b>Language: </b>{selected.language}
                    <br/>
                    <b>Rating: </b>{selected.rating.average ? selected.rating.average: "None"}
                    <br/>
                    <b>Genres: </b>{selected.genres.join(" | ")}
                </p>
                <br/>
                <p className="summary" dangerouslySetInnerHTML={{__html: selected.summary}}></p> 
            </div>
        </article>
    )
}

export default Show;