import React, { Component } from 'react';

export default class extends Component {
  render() {
    return(
      <form>
        <input placeholder="First Name"/>
        <input placeholder="Last Name"/>
        <input placeholder="Username"/>
        <input placeholder="PassWord"/>
        <input placeholder="Re-enter Password"/>
      </form>
    )
  }
}
