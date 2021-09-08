import React, {useState} from 'react';


const Show = (props) => {

    const selected = props.show;

    // const [favourite, setFavourite] = useState([{}]);

    const handleFavourite = (e) => {
        e.preventDefault();
        props.onFavourite(selected);
        // console.log("fav", favourite)
    }

    return (
        <article className="row">
            <div className="col-3 d-grid gap-2">
                {selected.image ? <img src={selected.image.medium}/> : <img src="No image found"/>}
                <button className="btn btn-primary" onClick={handleFavourite}>Add to Favourites</button>
            </div>
            <div className="row">
                <h2>Title: {selected.name}</h2>
                {selected.officialSite && <a href={selected.officialSite}>Official Site</a>}
                <p> 
                    <b>Language: </b>{selected.language}
                    <br/>
                    <b>Rating: </b>{selected.rating.average ? selected.rating.average: "None"}
                    <br/>
                    <b>Genres: </b>{selected.genres.join(" | ")}
                </p>
                <p className="summary" dangerouslySetInnerHTML={{__html: selected.summary}}></p> 
                <br/>
            </div>
        </article>
    )
}

export default Show;