import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import UserDetailCard from '../components/UserDetailCard'
import PostListItem from '../components/PostListItem';
import PostForm from '../components/PostForm';
import axios from 'axios';

export default class HomePageView extends Component {
  constructor(props){
    super(props);
    this.state ={
      isTeacher: false,
      students: [],
      content: '',
    }
  }

  componentWillMount() {
    this._fetchPost()
  }


  _fetchPost = (evt) => {
    const url = `http://localhost:8080/home/${JSON.parse(localStorage.getItem('student')).id}`
    // console.log(url, 'url');
    axios.get(url)
    .then(res => {
    console.log('response in posetlistitem', res);
    this.setState({students: res.data})
    })
  }
  _handleSubmit = (data) => {
    console.log(data);
    this.setState({ students: data })
  }

  render(){
    // console.log(this.state);
    return(
      <div className='wrapper'>
        <NavBar />
        <UserDetailCard students={this.state.students}/>
        <PostForm handleSubmit={this._handleSubmit}/>
        <PostListItem students={this.state.students}/>

      </div>
    )
  }
}
