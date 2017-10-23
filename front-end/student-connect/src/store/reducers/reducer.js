
const initialState = []
// constructor(){
//   super();
//   state = {
//     users: []
//   }
// }
// this.setState({users: response.users})
const RECEIVE_USERS = 'RECEIVE_USERS'
receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    payload: users
  }
}
currentUser = {
  username: 'bubba',
  isTeacher: false
}
// /login/student
// /login/teacher
/dashboard/teacher/lounge
//redux initialize on first load

function users(state = initialState, action){
  switch(action.type){
    case RECEIVE_USERS:
      const newState = Object.assign({}, state, {
        users: action.payload
      })
      return newState;
    default:
      return state;

  }
}
