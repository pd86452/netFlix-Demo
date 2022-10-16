import React from 'react';
import "./LoginScreen.css";
import Homescreen from './Homescreen';
import { useNavigate } from "react-router-dom"; 


function LoginScreen() {

    let navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" 
                     src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                <button className="loginScreen__button"
                        >
                    Sign In
                </button>

                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
           
            
            
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? 
                </h3>

                <div className="loginScreen__input">
                        <button onClick={handleClick} className="loginScreen__getStarted">
                            GET STARTED
                        </button>
                </div>
        
            </div>
            
        </div>
    )
}

export default LoginScreen
