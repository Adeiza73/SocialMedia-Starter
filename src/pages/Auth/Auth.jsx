import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ATEXA</h1>
                <h6>The Earth's Centre</h6>
            </div>
        </div>
        <LogIn />
        {/*<SignUp />*/}
    </div>
  )
}

function LogIn() {

    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                    <input type="text" placeholder="Username"
                     className="infoInput" name="username" />
                </div>

                <div>
                    <input type="text" placeholder="password"
                    className="infoInput" name="password" />
                </div> 

                <div>
                    <span style={{fontSize: "14px"}}>Don't have an account? Sign Up</span>
                </div>
                
                <button className="button infoButton" type="submit">Log In </button>
            </form>
        </div>
    )
}


function SignUp() {

    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder="First Name"
                     className="infoInput" name="firstName"/>
                       <input type="text" placeholder="Last Name"
                     className="infoInput" name="lastName" />
                </div>

                <div>
                    <input type="text" placeholder="Username"
                     className="infoInput" name="username" />
                </div>
                <div>
                    <input type="text" placeholder="password"
                    className="infoInput" name="password" />
                     <input type="text" placeholder="confirm password"
                    className="infoInput" name="confirmpassword" />
                    
                </div> 

                <div>
                    <span style={{fontSize: "14px"}}>Already have an account? Log In</span>
                </div>
                <button className="button infoButton" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Auth