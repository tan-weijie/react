import React, {useState} from 'react';
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
        if(email.includes('@') && password === repeat){
            const newUser = [{user: user, email: email, password: password}];
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
        <form>
            <h3>Sign up a new TVClone account.</h3>
            <div>
                <label>Username</label>
                <input onChange={handleNameChange} type="text" placeholder="Username" value={user}/>
            </div>
            <div>
                <label>Email</label>
                <input onChange={handleEmailChange} type="text" placeholder="Email" value={email}/>
                {!email.includes('@') && email.length > 0 && <label>Invalid email</label>}
            </div>
            <div>
                <label>Password</label>
                <input onChange={handlePassWordChange} type="password" placeholder="Password" value={password}/>
                {password !== repeat && password.length > 0 && <label>Different passwords</label>}
            </div>
            <div>
                <label>Repeat Password</label>
                <input onChange={handleRepeatChange} type="password" placeholder="Repeat Password" value={repeat}/>
                {password !== repeat && repeat.length > 0 && <label>Different passwords</label>}
            </div>
            <Link to="/login">
                 <button onClick={handleSubmit} type="submit">Sign Up</button>
            </Link>
            <div className="prompt">
                <h4>{prompt}</h4>
            </div>
        </form>
    )
}

export default SignUp;