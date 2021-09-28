import { signOut } from '@firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import PlansScreen from '../components/PlansScreen';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import "./ProfileScreen.css"

function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Navbar/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png"
                        alt="Netlix avatar"
                    />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlansScreen/>
                            <button
                                onClick={() => signOut(auth)}
                                className="profileScreen__logout"
                            >
                                Sign Out
                            </button>
                   </div>
                </div>
            </div>
                
         </div>
    </div>
    )
}

export default ProfileScreen