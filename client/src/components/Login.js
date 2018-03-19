import React, {Component} from 'react';

class Login extends Component {

    render(){
        return(
            <div>
                <div className="login-container center-box">
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png"/>
                    <h3>Username</h3>
                    <input></input>
                    <h3>Password</h3>
                    <input></input>
                <div className="buttons-container">
                    <button className = "login-button">Login</button>
                    <button className = "register-button">Register</button>
                </div>     
                </div>
                
            </div>   
        )
    }
}

export default Login