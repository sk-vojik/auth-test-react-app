import React, { Component } from 'react';
import './App.css';
import HomeView from "./views/HomeView"
import { Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"


class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Login} />

        <Route path="/home" render={props => (
          <HomeView />
        )}
        />

        <Route path="/signup" render={props => (
          <Signup />
        )}
        />
      
      </div>
    );
  }
}

export default App;
