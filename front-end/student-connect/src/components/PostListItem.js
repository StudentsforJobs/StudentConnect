import React, {Component} from 'react';
import PostForm from './PostForm';
import '../styles/homepageview.css';

export default class PostListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: [],
    }
  }


  render() {
console.log(this.props);
    const data = this.props.students.map((student) => {
      return (
        <div className="list-group" key={student.id}>
          <ul href="#" className="status-list">
            <li className="d-flex flex-column">
              <span>
                <h5 className=" text-left">{student.teacherTitle}  {student.firstName} {student.lastName}</h5>

              </span>
              <p className="list-group-item-text post-status">{student.content}</p>
              <div className="time-subject-container">
                <small className="subject text-left">{student.subject}</small>
                <small className="time text-right">{student.timeStamp}</small>
              </div>
            </li>

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
