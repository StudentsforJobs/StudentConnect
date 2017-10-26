import React from 'react';

export default class NavBar extends Component {
  redner() {
    return (
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">
          <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/></a>
        </nav>

        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
