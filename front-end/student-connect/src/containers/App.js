import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styles/App.css';
import StudentLoginView from "./StudentLoginView"
import RegistrationView from "./RegistrationView"
import HomePageView from "./HomePageView"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StudentLoginView}/>
            <Route exact path="/Registration" component={RegistrationView}/>
            <Route exact path="/Home/:id" component={HomePageView}/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
