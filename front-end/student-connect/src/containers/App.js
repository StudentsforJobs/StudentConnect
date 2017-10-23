import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import '../styles/App.css';
import StudentLoginView from "../StudentLoginView"
// import RegistrationView from "../views/RegistrationView"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={StudentLoginView} />
          {/* <Route exact path="/AdminLoginView" component={AdminLogin} /> */}
          {/* <Route exact path="/Registration" component={RegistrationView} /> */}
          {/* <Route exact path="/Create" component={Create} /> */}
          {/* <Route exact path="/Homepage" component={Homepage} /> */}
          {/* <Route exact path="/Classmate" component={Classmate} /> */}
          {/* <Route exact path="/Profile" component={Profile} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;