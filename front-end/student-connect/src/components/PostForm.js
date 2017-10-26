import React, { Component } from 'react';
import postdata from '../postdata';

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
    status: ''
    }
  }

  _handleStatus = (evt) => {
    console.log(evt.target.value);
    this.setState({status: evt.target.value})
  }

_onSubmit = (evt) => {
  evt.preventDefault();

}

  // _addToPost = (evt) => {
  //   evt.preventDefault();
  //   this.setState({post: evt.target.value})
  //   let postItem = JSON.stringify(this.state);
  //
  //
  // }

  _submitPost = (evt) => {
    evt.preventDefault()
    console.log(this.state);
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
