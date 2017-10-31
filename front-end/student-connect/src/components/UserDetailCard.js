import React, {Component} from 'react';
import axios from 'axios';
import '../styles/homepageview.css'
export default class UserDetailCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/home`)
    .then(res => {
      console.log(res);
    })
  }
  // _getStudent(){
  // return JSON.parse(localStorage.getItem('student'))
  // }

render(){
  return(
  <div className="profile-card" >
    <img className="card-img-top profile-image" src="../student1.jpg" alt="StudentImg"/>
    <div className="card-block">
      <h4 className="card-title">first name last name</h4>
      <p className="card-text">Iron Yard High School</p>
      <a href="#" className="btn profile-btn">Go to profile</a>
    </div>
  </div>
)
}

}
