import React from 'react';
import "../index.css"

const Home = () => {
    return (
        <div className="row display">
            <h3 className="white">Popular</h3>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Big Bang Theory</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/353/882587.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Walking Dead</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Game of Thrones</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/340/850857.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Brooklyn Nine-Nine</h5>
                </div>
            </div>
            <h3 className="white">Trending</h3>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/344/861125.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Riverdale</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/346/865655.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Lucifer</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/300/750718.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Supergirl</h5>
                </div>
            </div>
            <div className="card col-sm-3">            
                <img src="https://static.tvmaze.com/uploads/images/medium_portrait/1/3603.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Rick and Morty</h5>
                </div>
            </div>
        </div>
    )
}

export default Home;