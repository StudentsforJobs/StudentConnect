import React, {Component} from 'react';
// import PostForm from './PostForm';
import '../styles/homepageview.css';
import postdata from '../postdata';

export default class PostListItem extends Component {


  render() {
    // console.log(this);
    const newPost = this.props.content
    // console.log("newPost", newPost);
    const data = postdata.map((student) => {
      return (
        <div className="list-group">
          <ul href="#" className="status-list">
            <li className="d-flex flex-column">
              <span>
                <h5 className=" text-left">{student.teacherTitle}  {student.firstName} {student.lastName}</h5>

              </span>
              <p className="list-group-item-text post-status">{student.content}</p>
              <div className="time-subject-container">
                <small className="subject text-left">{student.subject}</small>
                <small className="time text-right">2 hrs ago</small>
              </div>
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
