import React, { Component } from 'react';
import userService from '../../services/userService';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      console.log("signup worked");
      this.props.handleSignupOrLogin();
      console.log("handlesignup worked");
      // Successfully signed up - show GamePage
      this.props.history.push("/");
      // window.location = "/index";
      console.log("window worked");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this.props.updateMessage(err.message);
      console.log("shit broke");
    }
  };

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br/>
          <input onChange={this.handleName} value={this.state.name} required={true}/>
          <br/>

          <label>Email</label>
          <br/>
          <input onChange={this.handleEmail} value={this.state.email} required={true}/>
          <br/>

          <label>Password</label>
          <br/>
          <input type="password" onChange={this.handlePassword} value={this.state.password} required={true}/>
          <br/>

          <br/>
          <input type='submit' value='Sign Up' className='btn btn-primary' />
        </form>
      </div> 
    )
  }
}

export default Signup;