import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch()

useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
  //User signed in
  dispatch(
    login({
    userId: user.uid,
    email: user.email
  })
)

  } else {
    // User is signed out
    dispatch(logout())
  }
})

return unsubscribe;
}, [dispatch])

  return (
    <div className="app">
      <Router>
        {
          !user ? 
            (<LoginScreen/>)
           : (
              <Switch>
                <Route path="/profile">
                  <ProfileScreen />
                </Route>
                <Route exact path="/">
                  <HomeScreen />
                </Route>
              </Switch>
              )
        }
      </Router>
    </div>
  );
}

export default App;
