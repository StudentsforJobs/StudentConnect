import React, {Component} from 'react';

export default class ProfileView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container profile-wrapper">
        <div className="container name-container">
          <h3 className="first-name">First Name</h3>
          <h3 className="last-name">Last Name</h3>
          <h4 className="schoolName">Iron Yard High</h4>
        </div>
        <img src="" alt="Picture of me"/>
        <div className="about-me-section">
          <h3 className="about">About Me:</h3>
          <span>Bio:</span>
          <p>A little about me blah blah blah</p>
        </div>
        <h3 className="clubs">Activities:</h3>
        <p>Math club</p>
        <p>Science club</p>
        <p>Reading club</p>
        <h3 className="interests">Interests:</h3>
      </div>
    )
  }
}
