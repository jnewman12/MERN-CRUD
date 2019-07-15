import React, { Component } from 'react';
import userService from '../../services/userService';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      posts: [];
    }
  }

  componentDidMount = () => {

  }

  render() {
    var posts = this.state.posts.map((post, idx) => {
      return (
        <div class="post-preview">
          <a href="#">
            <h2 class="post-title">
              {post.title}
            </h2>
          </a>
          <p class="post-meta">
            Posted by <Link to=`/users/`>{post.user}</Link>
            <a href="#">Start Bootstrap</a>
            on September 24, 2019
          </p>
          <hr>
        </div>
      )
    })

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <h1>Posts</h1>
            { posts }            
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;

{/*<li key={idx}>
  <Link to={`/posts/${post._id}`}>{post.title}</Link>
  <br/>
  <span>upvotes: {post.upvotes}</span>
  <br/>
  <a href="#" className="btn btn-success" onClick={() => this.handleUpvote(post._id, 'upvote')}>Upvote Post <i className="fa fa-thumbs-up"></i></a>
  <br/>
  <a href="#" className="btn btn-danger" onClick={() => this.handleUpvote(post._id, 'downvote')}>Downvote Post <i className="fa fa-thumbs-down"></i></a>
  <hr/>
</li>*/}
