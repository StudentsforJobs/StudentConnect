import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

  }
_validateForm(){
  return this.state.username.length > 0 && this.state.password.length > 0;
}

_handleUsernameChange = (evt) => {
  this.setState({username: evt.target.value})
}

_handlePasswordChange = (evt) => {
  this.setState({password: evt.target.value})
}

_onSubmit= (evt) => {
  evt.preventDefault()
  // const userLogin = {
  //   username: this.state.username,
  //   password: this.state.password
// }
  }


  render()  {
    console.log(this.state);
    return(
      <div className="form">
            <div id="login">
              <h1>Welcome Log In</h1>
              <form>
                <div className="usernameContainer">
                  <input onChange={this._handleUsernameChange} id="username" value={this.state.value} placeholder="username" type="username" required autoComplete="off"/>
              </div>

              <div className="passwordContainer">
                  <input onChange={this._handlePasswordChange} id="password" value={this.state.value} placeholder="password" type="password" required autoComplete="off"/>
              </div>

              <p className="register"><a href="#">Register</a></p>
              <p className="teacher"><a href="">Teachers</a></p>
              <button onSubmit={this._onSubmit} className="button button-block">Log In</button>

              </form>

            </div>

          </div>
    )
  }

}
