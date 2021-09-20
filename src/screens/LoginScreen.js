import React from 'react';
import "./LoginScreen.css"

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"  
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="login screen img"
                />
                
                <button className="loginScreen__btn">
                   Sign In 
                </button>
            </div>

            <div className="loginScreen__gradient"/>

            <div className="loginScreen__body">
                <>
                    <h1>Unlimited films, TV programmes and more</h1>
                </>
            </div>
        </div>
    )
}

export default LoginScreen
