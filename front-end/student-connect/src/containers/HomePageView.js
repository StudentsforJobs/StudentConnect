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
  const id = this.props.match.params.id;
  console.log(id);
  axios.get(`http://localhost:8080/home/${id}`)
  .then(res => {
    // console.log(res);
    let student = window.localStorage.getItem('student');
  })
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
