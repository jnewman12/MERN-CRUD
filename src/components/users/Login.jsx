import React, { Component } from 'react';
import userService from '../../services/userService';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    userService.login(this.state).then(function(json) {
      // console.log('json', json);
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
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

export default Login;