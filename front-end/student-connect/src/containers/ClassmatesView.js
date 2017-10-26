import React, { Component } from 'react';
import axios from 'axios';

export default class ClassmatesView extends Component {

  state = {
    students: ''
  }
  componentDidMount(){
    this._fetchPeople()
  }
  _fetchPeople = () => {
    axios.get('http://localhost:8080/students')
    .then(res => {
      console.log(res);
      this.setState({sudents: res.data})
    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.students.map(student => {
            return(
              <li key={student.id}>
                {student.firstName} {student.lastName}
                {student.clubs}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // <div class="card" style="width:20 rem;">
  // <img class="card-img-top" src="..." alt="Card image cap">
  //   <div class="card-body">
  //     <h4 class="card-title">{student.firstName} + " " + {student.lastName}</h4>
  //         <ul>
  //           {this.state.students.map(student => {
  //             return(
  //           <li class ="card-text" key={student.id}>
  //             {student.firstName} {student.lastName}
  //             {student.clubs}
  //           </li>
  //       )
  //     }
  //   )
  // }
  //     </ul>
  //   </div>
  // </div>

}
