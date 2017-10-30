import React, {Component} from 'react';
import axios from 'axios'
import '../styles/login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    }

  }
  componentDidMount() {
    this._fetchStudents()
  }

  _fetchStudents = () => {
    axios.get('http://localhost:8080/student').then(res => {
      console.log(res);
    })
  }

  // _validateForm = (evt) => {
  //   return this.state.userName.length > 0 && this.state.password.length > 0;
  //
  // }

  _handleUsernameChange = (evt) => {
    this.setState({userName: evt.target.value})
  }

  _handlePasswordChange = (evt) => {
    this.setState({password: evt.target.value})
  }

_onSubmit = (evt) => {
  evt.preventDefault();
  axios.post('http://localhost:8080/login', {
    username: this.state.userName,
    password: this.state.password
  })
  .then(res => {
    console.log(res);
    window.localStorage.setItem('student', JSON.stringify(res.data))
    this.props.history.push('/home/' + res.data.id)
  })
  .catch(res => {
    console.log('invalid login info');
  })
}


  render() {
    // console.log(this.props);
    return (
      <div className="form">
        <div className="jumbotron" id="login">
            <div className="container welcome-ctr d-flex flex-row justify-content">
              <img src="/studentconnect.png" alt="" className="student-connect-img"/>
              <h1 className="display-3 ">Welcome!</h1>
          </div>
          <p className="lead">Log In Below!</p>
          <hr className="my-4"/>
          <form onSubmit={this._onSubmit}>
            <div className="form-group">
              <input type="form-control" onChange={this._handleUsernameChange} id="username" value={this.state.userName} placeholder="Username" type="username" className=".form-control" required autoComplete="off"/>
            </div>

            <div className="form-group">
              <input onChange={this._handlePasswordChange} id="password" value={this.state.password} placeholder="password" type="password" className=".form-control" required autoComplete="off"/>
            </div>

            <button type='submit' className="btn btn-success login-btn">Log In</button>
            <p className="register">
              <a href='/Registration'>Register</a>
            </p>

          </form>

        </div>

      </div>
    )
  }

}
