import React, { Component } from 'react';
// import './styles/registration.css';
import axios from 'axios';

class RegistrationView extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      firstPassword: "",
      reEnterPassword: "",
      isMatching: ""



    }
    // componentDidMount(){
    //   this._registerUser()
    // }
  // _registerUser = () => {
  //   axios.post('http://localhost:8080/')
  // }

  }

  _handleSubmit = (event) => {
    event.preventDefault()
    console.log("handling submit", event.target)

    console.log("handling submit", event.target.querySelector("input[name='firstPassword']").value)
    console.log("handling submit", event.target.querySelector("input[name='reEnterPassword']").value)


        if (this.state.firstPassword !== this.state.reEnterPassword) {
          alert("Passwords do not match!")
        }
        console.log(this.state)
    }


  _handleFirstNameChange = (event) => {
    console.log("handling first name change")
    this.setState({firstName: event.target.value})
  }

  _handleLastNameChange = (event) => {
    console.log("handling last name change")
    this.setState({lastName: event.target.value})
  }

  _handleUsernameChange = (event) => {
    console.log("handling username change")
    this.setState({username: event.target.value})
  }

  _handleFirstPassword = (event) => {
    console.log("handling first password")
    this.setState({firstPassword: event.target.value})
  }

  _handleReEnterPassword = (event) => {
    console.log("handling re-enter password")
    this.setState({reEnterPassword: event.target.value})
  }

  render() {
    return(
      <div className="container">
        <h3>Register your account here!</h3>
        <form onSubmit={this._handleSubmit} className="registration-form">
            <input name="firstName"onChange={this._handleFirstNameChange} placeholder="First Name" className="form-control" required/>
            <input name="lastName"onChange={this._handleLastNameChange} placeholder="Last Name" className="form-control" required/>
            <input name="username" onChange={this._handleUsernameChange}placeholder="Username" className="form-control" required/>
            {/* {this.state.isMatching ? null : 'passwords do not match' } */}
            <input onChange={this._handleFirstPassword} name="firstPassword"type="password" placeholder="Password" className="form-control" required/>
            <input onChange={this._handleReEnterPassword} name="reEnterPassword" type="password" placeholder="Re-enter Password" className="form-control" required/>
            <button  type="Submit">Register</button>
        </form>
    </div>
    )
  }
}

export default RegistrationView;
