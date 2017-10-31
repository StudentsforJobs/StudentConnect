import React, {Component} from 'react';
import axios from 'axios';

export default class UserDetailCard extends Component {
  constructor(props){
    super(props);
    this.state = {
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


render(){
  return(
  <div className="profile-card" >
    <img className="card-img-top" src="../28.jpg" alt="StudentImg"/>
    <div className="card-block">
      <h4 className="card-title">first name last name</h4>
      <p className="card-text">Student at Iron Yard High School</p>
      <a href="#" className="btn btn-primary">Go to profile</a>
    </div>
  </div>
)
}

}
