import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "../Navbar.css"

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)

        return () => window.removeEventListener("scroll", transitionNavBar)

    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netlix logo" />

                <img
                    onClick = {()=>history.push("/profile")}
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png"
                    alt="Netlix avatar" />
            </div>
        </div>
    )
}

export default Navbar
