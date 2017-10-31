import React, {Component} from 'react';
// import PostForm from './PostForm';
import '../styles/homepageview.css';
import postdata from '../postdata';
// import axios from 'axios';


export default class PostListItem extends Component {
//   constructor() {
//     super()
//     this.state = {
//       post: ""
//     }
//   }
//   componentDidMount(){
//     this._fetchPosts();
//   }
// _fetchPosts (){
//   axios.get(`http://localhost:8080/home/${id}`)         .then(response => {
//             console.log("response", response);
// }
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
              <p className="list-group-item-text post-status">{student.status}</p>
              <div className="time-subject-container">
                <small className="subject text-left">{student.subject}</small>
                <small className="time text-right">2 hrs ago</small>
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
