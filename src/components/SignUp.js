import React, {useState} from 'react';
import "../index.css";
import {Link} from 'react-router-dom';

const SignUp = (props) => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [prompt, setPrompt] = useState("");

    const handleNameChange = (e) => {
        setUser(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassWordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRepeatChange = (e) => {
        setRepeat(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user && email.includes('@') && password === repeat){
            const newUser = {user: user, email: email, password: password};
            props.onSignUp(newUser);
            setUser("");
            setEmail("");
            setPassword("");
            setRepeat("");
            setPrompt("");
        }
        else
            setPrompt("Wrong Input");
    }

    return (
        <form class="display container-sm">
            <h3>Sign up a new TVClone account.</h3>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Username</span>
                <input onChange={handleNameChange} type="text" class="form-control" placeholder="username123" aria-label="Username" aria-describedby="basic-addon1" value={user}/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email</span>
                <input onChange={handleEmailChange} type="text" class="form-control" placeholder="name@email.com" aria-label="Username" aria-describedby="basic-addon1" value={email}/>
                {!email.includes('@') && email.length > 0 && <label>Invalid email</label>}
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input onChange={handlePassWordChange} type="password" class="form-control" placeholder="********" aria-label="Username" aria-describedby="basic-addon1" value={password}/>
                {password !== repeat && password.length > 0 && <label>Different passwords</label>}
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Repeat Password</span>
                <input onChange={handleRepeatChange} type="password" class="form-control" placeholder="********" aria-label="Username" aria-describedby="basic-addon1" value={repeat}/>
                {password !== repeat && password.length > 0 && <label>Different passwords</label>}
            </div>
            <div class="d-grid gap-2">
                <Link to="/login">
                    <button onClick={handleSubmit} class="btn btn-primary" type="submit">Sign Up</button>
                </Link>
            </div>
            {prompt &&    
            <div className="prompt">
                <div class="alert alert-warning" role="alert">
                    {prompt}
                </div>
            </div>}     
        </form>
    )
}

export default SignUp;