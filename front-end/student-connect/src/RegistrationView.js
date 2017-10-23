import React, { Component } from 'react';
// import '../styles/registration.css';

class RegistrationView extends Component {
  constructor(){
    super()
  }
  _handleSubmit = (event) => {
    // event.preventDefault()
    console.log("handling submit")

  }
  render() {
    return(
      <div className="container">
        <h3>Register your account here!</h3>
        <form className="registration-form">
            <input placeholder="First Name" className="form-control" required/>
            <input placeholder="Last Name" className="form-control" required/>
            <input placeholder="Username" className="form-control" required/>
            <input type="password" placeholder="Password" className="form-control" required/>
            <input type="password" placeholder="Re-enter Password" className="form-control" required/>
            <button type="Submit">Register</button>
        </form>
    </div>
    )
  }
}

export default RegistrationView;
