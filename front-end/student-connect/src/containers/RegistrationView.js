import React, { Component } from 'react';

export default class extends Component {
  render() {
    return(
      <form>
        <fieldset>
          <input placeholder="First Name"/>
          <input placeholder="Last Name"/>
          <input placeholder="Username"/>
          <input type="password" placeholder="Password" required/>
          <input type="password" placeholder="Re-enter Password" required/>
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
