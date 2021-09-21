import { onAuthStateChanged } from '@firebase/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

function App() {
const [user, setUser] = useState('');

useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
  console.log('us', user);
  } else {
    // User is signed out
  }
});
return unsubscribe();
}, [])

  return (
    <div className="app">
      <Router>
        {
          !user ? 
            (<LoginScreen/>)
           : (
              <Switch>
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
