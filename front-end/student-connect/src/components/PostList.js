import React, { Component } from 'react';
import postItem from './PostItem';

export default class PostList extends Component {
  contructor(props){
    super(props);
    this.state = {
      post: []
    }
  }
// fetch data


  render(){
    console.log(this.state);
    return(
      <div>
        <ul>
          <li><PostListItem /></li>
          <li>{.}</li>
        </ul>
      </div>
    )
  }

}
