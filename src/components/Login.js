import React ,{useState} from 'react';
import "../index.css";

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
            alert("Invalid username and password")
            props.onLogined(null);
        }
        else {
            setAccount("");
            setPassword("");
            props.onLogined(account);
        }
    }

    return (
            <form className="register container-sm">
                <h3>Login with your TVClone account.</h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Username</span>
                    <input onChange={handleUserNameChange} type="text" class="form-control" placeholder="username123" aria-label="Username" aria-describedby="basic-addon1" value={account}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input onChange={handlePassWordChange} type="password" class="form-control" placeholder="********" aria-label="Username" aria-describedby="basic-addon1" value={password}/>
                </div>
                <div class="d-grid gap-2">
                    {/* <Link to="/login"> */}
                        <button onClick={handleSubmit} class="btn btn-primary" type="submit">Login</button>
                    {/* </Link> */}
                </div>     
            </form>
    )
}

export default Login;