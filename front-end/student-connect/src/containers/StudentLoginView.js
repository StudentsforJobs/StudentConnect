import React, { Component } from 'react';
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }

  }
  componentDidMount(){
    this._fetchStudents()

  }

_fetchStudents = () => {
  axios.get('http://localhost:8080')
  .then(res => {
    console.log(res);
  })
}


_validateForm = (evt) => {
  return this.state.userName.length > 0 && this.state.password.length > 0;

}

_handleUsernameChange = (evt) => {
  this.setState({userName: evt.target.value})
}

_handlePasswordChange = (evt) => {
  this.setState({password: evt.target.value})
}

_onSubmit = (evt) => {
  evt.preventDefault()
  // console.log(this.state);
  // axios.post("localhost:8080/login", {
  //   userName: this.state.userName,
  //   password: this.state.password
  // }).then(res => console.log(res)
  // )
  this.props.history.push("/Home")
}


  render()  {
    console.log(this.props);
    return(
      <div className="form">
            <div id="login">
              <h1>Welcome! Log In</h1>
              <form onSubmit={this._onSubmit}>
                <div className="usernameContainer">
                  <input onChange={this._handleUsernameChange} id="username" value={this.state.value} placeholder="username" type="username" required autoComplete="off"/>
              </div>

              <div className="passwordContainer">
                  <input onChange={this._handlePasswordChange} id="password" value={this.state.value} placeholder="password" type="password" required autoComplete="off"/>
              </div>

              <p className="register"><a href='/Registration'>Register</a></p>
              <button type='submit' className="button button-block">Log In</button>

              </form>

            </div>

          </div>
    )
  }

}
