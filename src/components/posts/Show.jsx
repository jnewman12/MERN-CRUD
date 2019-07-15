import React, { Component } from 'react';
import { getPost, addComment, deletePost } from '../../services/postService';

class Show extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      body: '',
      comments: [],
      commentBody: ''
    }
  }

  componentDidMount = () => {
    var id = this.props.match.params.id;
    var self = this;

    getPost(id).then(function(post) {
      self.setState({
        id: post._id,
        title: post.title,
        body: post.body,
        comments: post.comments
      });
    })
  }

  handleCommentBody = (e) => {
    this.setState({ commentBody: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var self = this;
    // addComment(this.state.id, this.state.commentBody).then(function(json) {
    //   console.log(json);

    //   // json()
    //   // getPost(self.state.id).then(function(post) {
    //   //   self.setState({ 
    //   //     id: post._id,
    //   //     title: post.title,
    //   //     body: post.body,
    //   //     comments: post.comments,
    //   //     commentBody: ''
    //   //   });
    //   // })
    // })

    return fetch(`/api/posts/${this.state.id}/comments`, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        body: this.state.commentBody
      })
    }).then(res => {
      // if (res.ok) return res.json();
      // // Probably a duplicate email
      // throw new Error('res');

      if (res.ok) {
        return res.json();
      } else {
        console.log(res);
        // throw new Error('Something went wrong');
        throw res;
      }
    }).then(function(json) {
      console.log('json', json);
    }).catch((error) => {
      console.log(error);
    });
  }

  handleDelete = (id) => {
    deletePost(id).then(function(post) {
      window.location = '/';
    })
  }

  render() {
    var comments = this.state.comments.map((comment, idx) => {
      return (
        <li key={idx}>
          {comment.body}
        </li>
      )
    });

    return (
      <div>
        <h2>View Post</h2>
        <br/>
        <h4>{this.state.title}</h4>
        <p>{this.state.body}</p>
        <p><a href="#" className="btn btn-danger" onClick={() => this.handleDelete(this.state.id)}>Delete Post</a></p>
        <p><a href={`/posts/${this.state.id}/edit`} className="btn btn-success">Edit Post</a></p>
        <hr/>
        <br/>
        <ul>
          { comments.length < 1 ? 
            <h2>No Comments Yet</h2>
            :
            comments
          }
        </ul>
        <br/>
        <br/>
        <h3>Add New Comment</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Comment</label>
          <br/>
          <textarea onChange={this.handleCommentBody} value={this.state.commentBody} required={true}></textarea>
          <br/>
          <input type='submit' value='Add Comment' className='btn btn-primary' />
        </form>
      </div>
    )
  }
}

export default Show;
