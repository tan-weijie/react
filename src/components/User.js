import React from 'react';

const User = (props) => {
    return(
        <>
            {/* {props.logined} */}
            {props.favourite && <h3>Favourites</h3>}
            {props.favourite.map((element)=>{
                if (element.image){
                    return (
                        <img src={element.image.medium}/>
                    )
                }
                else 
                    return  <img src=""/>
            })}
        </>
    )
}

export default User;