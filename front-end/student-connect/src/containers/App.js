import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import '../styles/App.css';
import StudentLoginView from "./StudentLoginView"
import RegistrationView from "./RegistrationView"
import AdminLoginView from "./AdminLoginView"
import HomePageView from "./HomePageView"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={StudentLoginView} />
          <Route exact path="/Admin" component={AdminLoginView} />
          <Route exact path="/Registration" component={RegistrationView} />
          {/* <Route exact path="/Create" component={CreateProfileView} /> */}
          <Route exact path="/Homepage" component={HomePageView} />
          {/* <Route exact path="/Students" component={ClassmatesView} /> */}
          {/* <Route exact path="/Profile" component={ProfileView} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
