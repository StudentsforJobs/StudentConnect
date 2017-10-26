import React, { Component } from 'react';
import postdata from '../postdata';
import axios from 'axios';

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
    status: ''
    }
  }

  _handleStatus = (evt) => {
    console.log(evt.target.value);
    this.setState({status: evt.target.value})
  }



  _submitPost = (evt) => {
    evt.preventDefault()
    console.log(this.state);

    // axios.post('http://localhost:8080/home/0', {
    //   status: this.state.status
    // })
    // .then(res =>{
    //   console.log(res);
    // })
    }


  render() {
    console.log(this.state);
    return (
      <div className="statusPost">
        <form onSubmit={this._submitPost}>
          <input type="text" onChange={this._handleStatus} className="form-control" placeholder="Share an article, photo, or idea" aria-describedby="basic-addon1"/>
          <button type="submit" className="btn btn-primary btn-sm">Post</button>
        </form>
      </div>
    )
  }
}
