import React, { Component } from 'react';
import Registration from './RegistrationView'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

  }
_validateForm = (evt) => {
  return this.state.username.length > 0 && this.state.password.length > 0;

}

_handleUsernameChange = (evt) => {
  this.setState({username: evt.target.value})
}

_handlePasswordChange = (evt) => {
  this.setState({password: evt.target.value})
}

_onSubmit = (evt) => {
  evt.preventDefault()
  // console.log(this.state);
  // if (!valid) {
  //     //This happens when the user leaves the field, but it is not valid
  //     //(we do final validation in the parent component, then pass the result
  //     //here for display)
  //     message = this.props.errorMessage;
  //     valid = false;
  //     errorVisible = true;
  //   }
  //   else if (this.props.required && jQuery.isEmptyObject(value)) {
  //     //this happens when we have a required field with no text entered
  //     //in this case, we want the "emptyMessage" error message
  //     message = this.props.emptyMessage;
  //     valid = false;
  //     errorVisible = true;
  //   }
  //   else if (value.length < this.props.minCharacters) {
  //     //This happens when the text entered is not the required length,
  //     //in which case we show the regular error message
  //     message = this.props.errorMessage;
  //     valid = false;
  //     errorVisible = true;
  //   }
  }


  render()  {
    return(
      <div className="form">
            <div id="login">
              <h1>Welcome Log In</h1>
              <form onSubmit={this._onSubmit}>
                <div className="usernameContainer">
                  <input onChange={this._handleUsernameChange} id="username" value={this.state.value} placeholder="username" type="username" required autoComplete="off"/>
              </div>

              <div className="passwordContainer">
                  <input onChange={this._handlePasswordChange} id="password" value={this.state.value} placeholder="password" type="password" required autoComplete="off"/>
              </div>

              <p className="register"><a href={Registration}>Register</a></p>
              <p className="teacher"><a href="">Teachers</a></p>
              <button type='submit' className="button button-block">Log In</button>

              </form>

            </div>

          </div>
    )
  }

}
