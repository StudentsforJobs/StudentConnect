import React, { Component } from 'react';
// import { newPost } from './PostForm';


export default class PostListItem extends Component{
  render(){
    // const newPost = this.props.post
    // console.log("newPost", newPost);
    return(
      <div className="list-group">
  <ul href="#" className="list-group-item list-group-item-action active">
    <li><span><h5 className="list-group-item-heading">Student First and Last Name</h5><small>2 hrs ago</small></span>
    <p className="list-group-item-text">Post content goes here.</p>
    <small>class</small>
  </li>
  <li href="#" className="list-group-item list-group-item-action">
    <span><h5 className="list-group-item-heading">Teacher First and Last Name</h5><small>4 hrs ago</small></span>
    <p className="list-group-item-text">Post content goes here.</p>
    <small>teacher</small><small>class</small>
  </li>
  </ul>
</div>

    )
  }

}
