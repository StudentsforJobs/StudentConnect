import React, { Component } from 'react';
import axios from 'axios';
import '../styles/homepageview.css'
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    content: '',
    subject: ''
    }
  }


  _handleStatus = (evt) => {
    // console.log(evt.target.value);
    this.setState({content: evt.target.value})
  }



  _submitPost = (evt) => {
    evt.preventDefault()
    // console.log(this.state);
    axios.post(`http://localhost:8080/home/${JSON.parse(localStorage.getItem('student')).id}`, {
      content: this.state.content,
      firstName:'',
      lastName:'',
      isTeacher: false,
      teacherTitle: null,
    })
    .then(res =>{
      console.log(res);
    })
    
    }


  render() {
    // console.log(this);
    return (
      <div className="statusPost d-flex justify-content">
        <form  onSubmit={this._submitPost}>
          <input type="text" onChange={this._handleStatus} className="form-control" placeholder="Share an article, photo, or idea" aria-describedby="basic-addon1"/>
          <button type="submit" className="btn  btn-sm post-button">Post</button>
        </form>
      </div>
    )
  }
}
