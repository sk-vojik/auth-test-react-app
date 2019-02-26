import React, { Component } from 'react';
import './App.css';
import HomeView from "./views/HomeView"
import { Route } from "react-router-dom"
import Login from "./Components/Login/Login"


class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Login} />

        <Route path="/home" render={props => (
          <HomeView />
        )}
        />
      
      </div>
    );
  }
}

export default App;
