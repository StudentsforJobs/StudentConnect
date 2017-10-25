import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      post:
    }
  }
  _handlePost = (evt) => {
    console.log(evt.target.value);
    this.setState({post: evt.target.value})
  }

  _addToPost = (evt) => {
    evt.preventDefault();
    this.setState({post: evt.target.value})
    let postItem = JSON.stringify(this.state);


// fetch post for posts

  }

  _submitPost = (evt) => {
    evt.preventDefault()
    console.log(evt);
    const newPost = {
      post: this.state.post
    }
  }
  render() {
    console.log(this.state);
    return (
      <div class="statusPost">
        <form>
          <input type="text" className="form-control" placeholder="Share an article, photo, or idea" aria-describedby="basic-addon1"/>
          <button type="button" className="btn btn-primary btn-sm">Post</button>
        </form>
      </div>
    )
  }
}
