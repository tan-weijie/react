import React from 'react';


const Show = (props) => {

    const selected = props.show;

    // const summary = (selected.summary) => {
    //     const dom = document.createElement("div");
    //     dom.innerHTML = selected.summary;
    //     return dom;
    //     console.log(dom);
    // }

    return (
        <article>
            <img src={selected.image.medium}/>
            <div className="row">
                <h2>Title: {selected.name}</h2>
                <a href={selected.officialSite}>Official Site</a>
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