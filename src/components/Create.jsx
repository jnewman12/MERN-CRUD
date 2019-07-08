import React, { Component } from 'react';
// import { createArtist } from '../services/api';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      body: '',
    }
  }

  handleName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleBody = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var self = this;

    return fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: self.state.name,
        body: self.state.body
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(function(json) {
      window.location = '/'
    })
  }

  render() {
    return(
      <div>
        <h1>Add Post</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Post Name</label>
          <br/>
          <input onChange={this.handleName} value={this.state.name} required={true}/>
          <br/>

          <label>Post Body</label>
          <br/>
          <input onChange={this.handleBody} value={this.state.body} required={true}/>
          <br/>

          <br/>
          <input type='submit' value='Add Post' className='btn btn-primary' />
        </form>
      </div>  
    )
  }
}

export default Create;