import React, { Component } from 'react';
import NavBar from '../components/NavBar';
// import UserDetailCard from '../components/UserDetailCard'
import PostListItem from '../components/PostListItem';
import PostForm from '../components/PostForm';

export default class HomePageView extends Component {
  constructor(){
    super();
    this.state ={
      student: false,

    }
  }
componentDidMount() {
  axios.get('localhost:8080/???')
  .then(res => {
    let student = window.localStorage.getItem('student');
  })
}


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
