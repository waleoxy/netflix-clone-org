import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../firebase';
import "./SignUpScreen.css"

function SignUpScreen() {
const emailRef = useRef(null);
const passwordRef = useRef(null)

const register = (e) => {

createUserWithEmailAndPassword(
    auth, 
    emailRef.current.value, 
    passwordRef.current.value
    )
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user', user);
  })
  .catch((error) => {
   alert(error.message)
  });

}
const signIn = (e) => {
signInWithEmailAndPassword(
    auth, 
    emailRef.current.value, 
    passwordRef.current.value
    )
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('userin', user);
  })
  .catch((error) => {
   alert(error.message)
  });


}

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Rmail Address"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button type="button" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signUpScreen__gray">New to Netflix?</span> 
                    <span className="signUpScreen__link" onClick={register}>Sign up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
