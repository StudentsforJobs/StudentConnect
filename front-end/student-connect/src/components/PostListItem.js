import React, { Component } from 'react';
import { newPost } from './PostForm';

export default class PostListItem extends Component{
  render(){
    const newPost = this.props.post
    console.log("newPost", newPost);
    return(
      <div className="list-group">
        <div className="d-flex w-100 justify-content between">
          <h6 className="mb-1">Student Name</h6>
          <small>plug-in moment</small>
        </div>
          <p>Post goes here</p>
      </div>
    )
  }

}
