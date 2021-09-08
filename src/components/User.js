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

                        <div className="card col-sm-3 ">
                                <img src={element.image.medium} className="card-img-top" alt=""/>
                                <div class="card-body d-grid gap-2">
                                    <h5 class="card-title">{element.name}</h5>
                                    <button className="btn btn-primary">Remove</button>
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