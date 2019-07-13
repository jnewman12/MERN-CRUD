import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// delete implementing in index
import Index from './components/posts/Index';
import Create from './components/posts/Create';
import Edit from './components/posts/Edit';
import Show from './components/posts/Show';

// added
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import Signup from './components/users/Signup';

import { Route, Switch, Link } from 'react-router-dom';

import userService from './services/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogOut = () => {
    console.log("handlelogout called");
    userService.logout();
    console.log("logged out");
    this.setState({ user: null });
    console.log(this.state.user);
  };

  render() {
    return(
      <div className="container-fluid">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/login" render={(props) => {
            return <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
          }} />

          <Route path="/logout" render={(props) => {
            return <Logout onLogOut={this.logOut} />
          }} />

          {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as 
            onLoginSuccess: set the state to contain the currentUser */}
          <Route path="/signup" render={(props) => {
            return <Signup {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
          }} />

          <Route exact path='/' component={ Index } />
          <Route exact path='/create' component={ Create } />
          <Route exact path='/posts/:id' render={ (props) =>
            <Show {...props} />
           } />
          <Route exact path='/posts/:id/edit' render={ (props) => 
            <Edit {...props} />
           } />
        </Switch>
      </div>
    )
  }
}

export default App;
