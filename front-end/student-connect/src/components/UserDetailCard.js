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
      currentStudent: this._getStudent()
    }
  }

  componentDidMount() {
    const that = this;
    axios.get(`http://localhost:8080/home`)
    .then(res => {
      const student = this._getStudent()
      console.log(res);
      that.setState({currentStudent: student})
    })
  }
  _getStudent = () => {
    const student = JSON.parse(localStorage.getItem('student'))
    console.log(student)
  return student
}

render(){

  return(
  <div className="profile-card" >
    <img className="card-img-top profile-image" src={`../public/student${this.state.id}`} alt="StudentImg"/>
    <div className="card-block">
      <h4 className="card-title">{this.state.currentStudent.firstName} {this.state.currentStudent.lastName}</h4>
      <p className="card-text">Iron Yard High School</p>
      <a href="#" className="btn profile-btn">Go to profile</a>
    </div>
  </div>
)
}

}
