import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

function App() {
const [user, setUser] = useState('')

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
