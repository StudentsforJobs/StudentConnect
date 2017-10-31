import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import UserDetailCard from '../components/UserDetailCard'
import PostListItem from '../components/PostListItem';
import PostForm from '../components/PostForm';
import axios from 'axios';

export default class HomePageView extends Component {
  constructor(){
    super();
    this.state ={
      isTeacher: false,

    }
  }
componentDidMount() {

}

  render(){
    return(
      <div className='wrapper'>
        <NavBar />
        <UserDetailCard />
        <PostForm />
        <PostListItem />

      </div>
    )
  }
}
