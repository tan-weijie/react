import React, {useState} from 'react';

const Form = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    const handleSubmit = async (e) => {
         
        e.preventDefault();
        props.onSubmit();
        // props.onChange(""); //reset input field
        // console.log(input);

        const url = "https://api.tvmaze.com/search/shows?q=";

        try{
            let res = await fetch(url + props.value);
            res = await res.json();
            // setResult(res);
            // console.log(res[0].show);
            // let link = [];
            // if (Array.isArray(res)){
            //     link = res.map((element) => {
            //         return element.show.image.medium;
            //     })
            //     props.onResult(link);
            // }
            // else {
            //     link = res.show.image.medium;
            //     props.onResult([link]);
            // }
            // const link = res[0].show.image.medium;
            props.onResult(res);
            // console.log(link);
        }
        catch(err){
            console.log("error", err.message);
        }
    }

    return(
        <form>
            <input onChange={handleChange} type="text" placeholder="Search for show." value={props.value}/>
            {/* {input} */}
            <button onClick={handleSubmit}>Search</button>
            {/* {search} */}
            {/* <img src={props.result}/> */}
        </form>
    )
}

export default Form;