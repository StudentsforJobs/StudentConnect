import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import '../styles/App.css';
import StudentLoginView from "./StudentLoginView"
import RegistrationView from "./RegistrationView"
import HomePageView from "./HomePageView"
// import ClassmatesView from "./ClassmatesView"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={StudentLoginView} />
          <Route exact path="/Registration" component={RegistrationView} />
<<<<<<< HEAD
          <Route exact path="/Create" component={CreateProfileView} />
          {/* <Route path="/Homepage/:id"/ component={Homepage}/> */}
          {/* <Route exact path="/Homepage" component={Homepage} /> */}
          {/* <Route exact path="/Students" component={ClassmatesView} /> */}
          <Route path="/Profile/:studentprofileid" component={ProfileView} />
=======
          {/* <Route exact path="/Create" component={CreateProfileView} /> */}
          <Route exact path="/Home" component={HomePageView} />
          {/* <Route exact path="/Students" component={ClassmatesView} /> */}
>>>>>>> c4801e9e2dfab7726d2015afb60e0349385fb3bb
          {/* <Route exact path="/Profile" component={ProfileView} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
