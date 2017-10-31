import React, {Component} from 'react';
import PostForm from './PostForm';
import '../styles/homepageview.css';
import postdata from '../postdata';
import axios from 'axios';

export default class PostListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    this._fetchPost()
  }

  _fetchPost = (evt) => {
    const url = `http://localhost:8080/home/${JSON.parse(localStorage.getItem('student')).id}`
    console.log(url, 'url');
    axios.get(url)
    .then(res => {
    console.log('response in posetlistitem', res);
    this.setState({students: res.data})
    })
  }


  render() {

    const data = this.state.students.map((student) => {
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
