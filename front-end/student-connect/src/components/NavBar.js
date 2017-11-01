import React, {Component} from 'react';
import '../styles/homepageview.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse">
        <img className="logo" src="/studentconnect.png" alt="Student Connect"/>
        <h1>Student Connect</h1>
        <a href="/" className="nav-options">Logout</a>

      </nav>
    )
  }
}
