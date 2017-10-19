import React, { Component } from 'react';

export default Class extends Component {
  render() {
    return(
      <h3>Register your account here!</h3>
      <form>
        <fieldset>
          <input placeholder="First Name" required/>
          <input placeholder="Last Name" required/>
          <input placeholder="Username" required/>
          <input type="password" placeholder="Password" required/>
          <input type="password" placeholder="Re-enter Password" required/>
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
