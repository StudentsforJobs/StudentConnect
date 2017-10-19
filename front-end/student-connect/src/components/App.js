import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import logo from './logo.svg';
import '../styles/App.css';
import Login from "./Login"

class App extends Component {
  render() {
    return (
    <div>
      <Login />
    </div>
    );
  }
}

export default App;
