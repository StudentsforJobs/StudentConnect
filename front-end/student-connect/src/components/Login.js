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

_handleChange = (evt) => {
  this.setState({[evt.target.id]: evt.target.value})
}

_onSubmit= (evt) => {
  evt.preventDefault()
  // const userLogin = {
  //   username: this.state.username,
  //   password: this.state.password
  }


  render()  {
    return(
      <div className="form">
          <div className="tab-content">
            <div id="login">
              <h1>Welcome Back!</h1>
              <form>
                <div className="field-wrap">
                <label>
                  Username<span className="req">*</span>
                </label>
                <input type="email"required autoComplete="off"/>
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password"required autoComplete="off"/>
              </div>

              <p className="register"><a href="#">Register</a></p>
              <p className="teacher"><a href="">Teachers</a></p>
              <button className="button button-block">Log In</button>

              </form>

            </div>

          </div>

    </div>

    )
  }

}
