import React, { Component } from 'react';
import axios from 'axios';
import '../styles/homepageview.css'
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    content: [],
    subject: ''
    }
  }


  _handleStatus = (evt) => {
    // console.log(evt.target.value);
    this.setState({content: evt.target.value})
  }

_handleStatusSubject = (evt) => {
  this.setState({subject: evt.target.value})
}

  _submitPost = (evt) => {
    evt.preventDefault()
    // console.log(this.state);
    axios.post(`http://localhost:8080/home/${JSON.parse(localStorage.getItem('student')).id}`, {
      content: this.state.content,
      firstName: this._getStudent().firstName,
      lastName: this._getStudent().lastName,
      teacher: this._getStudent().teacher,
      teacherTitle: this._getStudent().teacherTitle,
      subject: "Geometry",
      timeStamp: this._getStudent().timeStamp
    })
    .then(res =>{
      // console.log("res data", this.props);
      // this.props._handleSubmit
    })

    }

    _getStudent(){
    return JSON.parse(localStorage.getItem('student'))
    }

    _makeSubjects() {
    let subs = this._getStudent().subjects
    return subs.map((item, idx) => <option key={item.id}>{item.name}</option>)
    }

    _getBuildOptions () {
    return (<select onChange={this._handleStatusSubject}>
      {this._makeSubjects()}
    </select>)
    }

  render() {
    // console.log(this);
    return (
      <div className="statusPost d-flex justify-content">
        <form  onSubmit={this._submitPost}>
          <input type="text" onChange={this._handleStatus} className="form-control" placeholder="Share an article, photo, or idea" aria-describedby="basic-addon1"/>
            {this._getBuildOptions()}
          <button type="submit" className="btn  btn-sm post-button">Post</button>

        </form>

      </div>
    )
  }
}
