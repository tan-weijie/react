import React ,{useState} from 'react';

const Login = (props) => {

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (e) => {
        setAccount(e.target.value)
    }
    const handlePassWordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const storage = window.localStorage;
        const result = JSON.parse(storage.getItem(account));
        console.log(result);
        if(!result || result.password !== password){
            alert("invalid username and password")
        }
    }

    return (
        <form>
            <h2>Login with your TVClone account.</h2>
            <div>
                <label>Username/Email</label>
                <input onChange={handleUserNameChange}type="text" placeholder="Username/Email" value={account}/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={handlePassWordChange} type="password" placeholder="Password" value={password}/>
            </div>
            <button onClick={handleSubmit} type="submit">Login</button>
            <br/>
            {account}
            <br/>
            {password}
        </form>
    )
}

export default Login;