import React, { Component } from 'react';

export default class ProfileView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="container profile-wrapper">
        <div className="container name-container d-flex flex-row">
          <h3 className="first-name ">First Name</h3>
          <h3 className="last-name">Last Name</h3>
        </div>
        <img src="https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image" alt="" className="w-50 h-50"/>
        <h3 className="about">About</h3>
        <p></p>
        <h3 className="clubs">Clubs</h3>
        <p></p>
        <h3 className= "activities">Activities</h3>
        <p></p>
      </div>
    )
  }
}
