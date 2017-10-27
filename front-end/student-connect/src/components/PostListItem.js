import React, {Component} from 'react';
// import { newPost } from './PostForm';
import postdata from '../postdata';
import '../styles/homepageview.css';
export default class PostListItem extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     firstName: '',
  //     lastName: '',
  //     status: '',
  //     teacherTitle: '',
  //     // isTeacher: false,
  //     subject: ''
  //   }
  // }
  //
  // _handlePost = (evt) => {
  //   // console.log(evt.target.value);
  //   this.setState({firstName: evt.target.value, lastName: evt.target.value, status: evt.target.value, teacherTitle: evt.target.value, subject:evt.target.value})
  // }
  //
  // _addToPost = (evt) => {
  //   evt.preventDefault();
  //   this.setState({status: evt.target.value})
  //   let postItem = JSON.stringify(this.state);
  //
  //
  // }
  //
  // _submitPost = (evt) => {
  //   evt.preventDefault()
  //   console.log(this.state);
  //
  //   }


  render() {
    // const newPost = this.props.post
    // console.log("newPost", newPost);
    const data = postdata.map((student) => {
      return (
        <div className="list-group">
          <ul href="#" className="status-list">
            <li>
              <span>
                <h5 className=" text-left">{student.teacherTitle}{student.firstName} {student.lastName}</h5>

              </span>
              <p className="list-group-item-text">{student.status}</p>
              <small>{student.subject}</small>
              <small>2 hrs ago</small>
            </li>
            {/* <li href="#" className="list-group-item list-group-item-action">
              <span>
                <h5 className="list-group-item-heading">{student.teacherTitle}{student.teacherLastName}</h5>
                <small>4 hrs ago</small>
              </span>
              <p className="list-group-item-text">{student.status}</p>
              <small>{student.teacherTitle}{student.teacherLastName}</small>
              <small>{student.subject}</small>
            </li> */}
          </ul>
        </div>
      )

    })
    return(
      <div className="status-post">
        <div className="list">
          {data}
        </div>
      </div>
    )
  }
}
