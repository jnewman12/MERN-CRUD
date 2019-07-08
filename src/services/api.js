// index
export function getPosts() {
  return fetch(`/api/posts`).then(function(res) {
    return res.json();
  })
}

// show
export function getPost(id) {
  return fetch(`/api/posts/${id}`).then(function(res) {
    return res.json();
  })
}

// create
export function createPost(post) {
  return fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: post.name,
      body: post.body
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// edit
export function editPost(post) {
  return fetch(`/api/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: post.title,
      body: post.body
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// delete
export function deletePost(id) {
  return fetch(`/api/posts/${id}`, {
    method: 'delete'
  }).then(function(res) {
    return res.json()
  });
}

// upvote/downvote posts
export function upvotePost(id, type) {
  var type = type === "downvote" ? "downvote" : "upvote";
  return fetch(`/api/posts/${id}/${type}`, {
    method: 'PUT',
    body: JSON.stringify({
      upvotes: 1
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

// add a comment to post
export function addComment(postId, comment) {
  return fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      body: comment
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}

