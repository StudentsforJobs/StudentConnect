import React, { Component } from 'react';
import NavBar from '../components/NavBar';
// import UserDetailCard from '../components/UserDetailCard'
import PostListItem from '../components/PostListItem';
import PostForm from '../components/PostForm';

export default class HomePageView extends Component {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     newsfeed = '',
  //     post = '',
  //
  //   }
  // }



  render(){
    return(
      <div className='wrapper'>
        <NavBar />
        {/* <UserDetailCard /> */}
        <PostForm />
        <PostListItem />



      </div>
    )
  }
}
