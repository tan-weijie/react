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
        // console.log(result[0].password)
        if(!result || result[0].password !== password){
            alert("invalid username and password")
            props.onLogined(null);
        }
        else {
            setAccount("");
            setPassword("");
            props.onLogined(account);
        }
    }

    return (
        <form>
            <h3>Login with your TVClone account.</h3>
            <div>
                <label>Username</label>
                <input onChange={handleUserNameChange}type="text" placeholder="Username" value={account}/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={handlePassWordChange} type="password" placeholder="Password" value={password}/>
            </div>
            <button onClick={handleSubmit} type="submit">Login</button>
            {/* <br/>
            {account}
            <br/>
            {password} */}
        </form>
    )
}

export default Login;