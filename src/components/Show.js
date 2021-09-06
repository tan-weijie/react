import React from 'react';


const Show = (props) => {

    const selected = props.show;

    return (
        <article>
            {selected.image ? <img src={selected.image.medium}/> : <img src="No image found"/>}
            <div className="row">
                <h2>Title: {selected.name}</h2>
                {selected.officialSite ? <a href={selected.officialSite}>Official Site</a>: <a></a>}
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