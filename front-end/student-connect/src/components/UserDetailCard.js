import React, {Component} from 'react'

export default class UserDetailCard extends Component {
render(){
  return(
  <div className="profile-card" >
    <img className="card-img-top" src="../28.jpg" alt="StudentImg"/>
    <div className="card-block">
      <h4 className="card-title">First Name Last Name</h4>
      <p className="card-text">Student at Iron Yard High School</p>
      <a href="#" className="btn btn-primary">Go to profile</a>
    </div>
  </div>
)
}

}
