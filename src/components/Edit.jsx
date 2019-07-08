import React, { Component } from 'react';
import { editPost, getPost } from '../services/api';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      body: ''
    }
  }

  handleName = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBody = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var self = this;

    editPost(this.state).then(function(post) {
      window.location = `/posts/${self.state.id}`
    });
  }

  componentDidMount = () => {
    var id = this.props.match.params.id;
    var self = this;

    getPost(id).then(function(post) {
      self.setState({
        id: post._id,
        title: post.title,
        body: post.body
      });
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
          <input onChange={this.handleName} value={this.state.title} required={true}/>
          <br/>

          <label>Post Body</label>
          <br/>
          <input onChange={this.handleBody} value={this.state.body} required={true}/>
          <br/>

          <br/>
          <input type='submit' value='Edit Post' className='btn btn-primary' />
        </form>
      </div>  
    )
  }
}

export default Create;