import React, { Component } from 'react';
import postItem from './PostListItem';


export default class PostList extends Component {
  contructor(props){
    super(props);
    this.state = {
      post: []
    }
  }
componentDidMount() {

}

  render(){
    console.log(this.state);
    return(
      <div className="container">
        <ul>
        </ul>
      </div>
    )
  }

}
