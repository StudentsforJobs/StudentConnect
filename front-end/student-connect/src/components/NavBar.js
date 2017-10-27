import React, { Component } from 'react';
import '../styles/homepageview.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse">
              <a className="navbar-brand">Student Connect</a>
              <img src="/studentconnect.png" width="30" height="30" className="d-inline-block align-top" alt="Student Connect"/>
            </nav>)
}
}
