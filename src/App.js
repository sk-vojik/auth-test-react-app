import React, { Component } from 'react';
import './App.css';
import HomeView from "./views/HomeView"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import { Route, NavLink, withRouter } from 'react-router-dom';



class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">

        <header>
         <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/signup">Users</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>

         </nav>
       </header>

        <Route exact path="/login" component={Login} />

        <Route path="/users" render={props => (
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

export default withRouter(App);
