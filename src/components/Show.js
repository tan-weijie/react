import React from 'react';

const Show = (props) => {

    const selected = props.show.show;

    // const summary = (selected.summary) => {
    //     const dom = document.createElement("div");
    //     dom.innerHTML = selected.summary;
    //     return dom;
    //     console.log(dom);
    // }
    
    return (
        <>
            <div className="row">
                <img src={selected.image.medium}/>
                <h2>{selected.name}</h2>
                {selected.summary}
            </div>
        </>
    )
}

export default Show;