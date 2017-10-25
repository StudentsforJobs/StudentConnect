import React, { Component } from 'react';

export default class CreateProfileView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="container">
        <form>
          <input placeholder="Image link"/>
          <textarea name="about" cols="30" rows="10" placeholder= "About"></textarea>
          <label>clubs</label>
          <input name="clubs"type="text" placeholder="club"/>
          <input name="clubs"type="text" placeholder="club"/>
          <input name="clubs"type="text" placeholder="club"/>
        </form>
      </div>
    )
  }
}
