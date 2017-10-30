import React, { Component } from 'react';
import axios from 'axios';
import '../styles/homepageview.css'
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    status: ''
    }
  }


  _handleStatus = (evt) => {
    // console.log(evt.target.value);
    this.setState({status: evt.target.value})
  }



  _submitPost = (evt) => {
    evt.preventDefault()
    console.log(this.props);
    axios.post(`http://localhost:8080/home`, {
      status: this.state.status
    })
    .then(res =>{
      console.log(res);
    })
    }

    _getStudent(){
    JSON.parse(getItem('student'))
    }

    _makeSubjects() {
    let subs = getStudent().subjects
    subs.map(item => <option value="">{item.name}</option>)
    }

    _getBuildOptions () {
    return <select>
      {makeSubjects()}
    </select>
    }

  render() {
    console.log(this.state);
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
