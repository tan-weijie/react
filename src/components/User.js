import React from 'react';
import "../index.css";

const User = (props) => {

    const handleRemove = (e) => {
        props.onRemove(e.target.id);
    }

    return(
        <>
            {/* {props.logined} */}
            {props.favourite && <h3 className="white">Favourites: </h3>}
            <div className="row">
            {props.favourite.map((element)=>{                
                if (element.image){
                    return (
                        // <img src={element.image.medium}/>

                        <div className="card col-sm-3 ">
                                <img src={element.image.medium} className="card-img-top" alt=""/>
                                <div class="card-body">
                                    <div className="row align-self-end">
                                        <button className="btn btn-primary" id={element.id} onClick={handleRemove}>Remove</button>
                                        {/* <h5 class="card-title">{element.name}</h5> */}
                                    </div>
                                </div>
                        </div>
                    )
                }
                else 
                    return  <img src=""/>
            })}
            </div>
        </>
    )
}

export default User;