import React from 'react';

const User = (props) => {
    return(
        <>
            {/* {props.logined} */}
            {props.favourite && <h3>Favourites</h3>}
            {props.favourite.map((element)=>{                
                if (element.image){
                    return (
                        // <img src={element.image.medium}/>

                        <div className="card col-sm-3">
                                <img src={element.image.medium} className="card-img-top" alt=""/>
                                <div class="card-body">
                                    {/* <h5 class="card-title">{element.show.name}</h5> */}
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Add to favourite</a> */}
                                </div>
                        </div>
                    )
                }
                else 
                    return  <img src=""/>
            })}
        </>
    )
}

export default User;