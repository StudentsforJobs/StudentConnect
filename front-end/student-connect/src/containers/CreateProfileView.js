import React, { Component } from 'react';

export default class CreateProfileView extends Component {
  constructor(props) {
    super(props)

  }
  _handleSubmit = (event) => {
    event.preventDefault()
    console.log("handling submit", event.target)
  }

  _handleOnChange = (event) => {
    console.log('handling change');
  }
  render() {
    return(
      <div className="container d-flex flex-column">
        <div className="container d-flex flex-row">
          <h3>First Name</h3>
          <h3>Last Name</h3>
        </div>
        <form class="d-flex flex-column">
          <input type="url" name="profile-image" placeholder="Put your image link here "/>
          <textarea name="about" cols="30" rows="10" placeholder= "Write a little bit about yourself"></textarea>
          <div className="form-group">
            <label htmlFor="clubs">clubs</label>
              <input name="clubs"type="text" placeholder="club" className="form-control clubs" id="clubs"/>
              <input name="clubs"type="text" placeholder="club" className="form-control clubs" id="clubs"/>
              <input name="clubs"type="text" placeholder="club" className="form-control clubs" id="clubs"/>
          </div>
          <div className="form-group">
            <label htmlFor="activities">activities</label>
              <input className= "activities form-control" type="text" placeholder="activity" id="activities"/>
              <input className= "activities form-control" type="text" placeholder="activity" id="activities" />
              <input className= "activities form-control" type="text" placeholder="activity" id="activities"/>
          </div>
        <button type="submit">Create Profile</button>
        </form>
      </div>
    )
  }
}
