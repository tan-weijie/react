import React, {useState} from 'react';


const Show = (props) => {

    const selected = props.show;

    

    const handleFavourite = (e) => {
        e.preventDefault();
        props.onFavourite(selected);
        // console.log("fav", favourite)
    }

    return (
        <article className="row white">
            <div>
                <h3>{selected.name}</h3>
                <div className="col-3 d-grid gap-2">
                    {selected.image ? <img className="float" src={selected.image.medium}/> : <img className="float" src="https://via.placeholder.com/210x295?text=No+Image"/>}
                    <button className="btn btn-primary" onClick={handleFavourite}>Add to Favourites</button>
                </div>
            </div>
            <div>
                <br/>
                {selected.officialSite && <a className="site" href={selected.officialSite} target="_blank">Official Site</a>}
                <p> 
                <br/>
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