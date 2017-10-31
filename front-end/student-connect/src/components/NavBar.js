import React, { Component } from 'react';
import '../styles/homepageview.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse">
              <a className="navbar-brand title">Student Connect</a>
              <a href="/" className="nav-options">Logout</a>
              <a href="/profile" className="nav-options" >Profile</a>
              <a href="/Students" className="nav-options">Classmates</a>
              <img src="/studentconnect.png" width="30" height="30" className="d-inline-block align-top" alt="Student Connect"/>
            </nav>)
}
}
