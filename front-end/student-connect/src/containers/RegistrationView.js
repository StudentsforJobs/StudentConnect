import React, { Component } from 'react';
import '../styles/registration.css';

class RegistrationView extends Component {
  render() {
    return(
      <div>
        <h3>Register your account here!</h3>
        <form>
          <fieldset>
            <input placeholder="First Name" required/>
            <input placeholder="Last Name" required/>
            <input placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Re-enter Password" required/>
            <button type="Submit">Register</button>
          </fieldset>
        </form>
    </div>
    )
  }
}

export default RegistrationView;
