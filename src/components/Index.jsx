import React, { Component } from 'react';
// import { getArtists, deleteArtist } from '../services/api';

// import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
  }

  // handleDelete = (id) => {
  // }

  render() {
    return (
      <h1>Hi from Index!</h1>
    )
  }
}

export default Index;