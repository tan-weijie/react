import React from 'react';

const Login = (props) => {
    return (
        <form>
            <h2>Login with your TVClone account.</h2>
            <div>
                <label>Username/Email</label>
                <input type="text" placeholder="Username/Email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;