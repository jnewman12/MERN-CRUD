import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// delete implementing in index
// import Index from './components/posts/Index';
// import Create from './components/posts/Create';
// import Edit from './components/posts/Edit';
// import Show from './components/posts/Show';

// added
import Navbar from './components/Navbar';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import Signup from './components/users/Signup';

import CreatePost from './components/posts/Create';

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

  handleLogout = () => {
    console.log("handlelogout called");
    userService.logout();
    console.log("logged out");
    this.setState({ user: null });
    console.log(this.state.user);
  };

  render() {
    return(
      <div className="container-fluid">
        <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <Switch>

          /* User Sign Up */
          <Route path="/login" render={(props) => {
            return <LoginPage {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
          }} />

          <Route path="/signup" render={(props) => {
            return <SignupPage {...props} handleSignupOrLogin={this.handleSignupOrLogin} />
          }} />

          /* Posts */
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/posts/:id' render={ (props) =>
            <ShowPostPage {...props} />
          } />

          <Route exact path='/posts/new' render={() => 
            userService.getUser() ? 
              <CreatePostPage />
            :
              <Redirect to='/login'/>
          }/>

          <Route exact path='/posts/:id/edit' render={ (props) => 
            userService.getUser() ?
              <EditPostPage {...props} />
            :
              <Redirect to='/login'/>
          } />

          /* CurrentUser Account stuff */
        </Switch>
      </div>
    )
  }
}

export default App;
