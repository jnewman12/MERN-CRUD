import React, { Component } from 'react';
import { getPosts, upvotePost} from '../services/api';

import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    var self = this;
    getPosts().then(function(posts) {
      self.setState({posts: posts})
    })
  }

  handleUpvote = (id, type) => {
    var self = this;

    upvotePost(id, type).then(function(json) {
      getPosts().then(function(posts) {
        self.setState({posts: posts})
      })
    })
  }

  render() {
    var posts = this.state.posts.map((post, idx) => {
      return (
        <li key={idx}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
          <br/>
          <span>upvotes: {post.upvotes}</span>
          <br/>
          <a href="#" className="btn btn-success" onClick={() => this.handleUpvote(post._id, 'upvote')}>Upvote Post <i className="fa fa-thumbs-up"></i></a>
          <br/>
          <a href="#" className="btn btn-danger" onClick={() => this.handleUpvote(post._id, 'downvote')}>Downvote Post <i className="fa fa-thumbs-down"></i></a>
          <hr/>
        </li>
      )
    })

    return (
      <div>
        <h2>Reddit Clone</h2>
        <hr/>
        <br/>
        <ul>
          { posts }
        </ul>
      </div>
    )
  }
}

export default Index;