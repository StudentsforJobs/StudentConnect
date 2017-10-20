import { autheader } from '../helpers';
import { getUser } from 'axios';

export const userService = {
  login,
  getAll,
  getById,
  update,
}

function logIn(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-type': 'application/JSON' },
    body: JSON.stringify({ username, password })
  };
  // return getUser(){
  //   if
  // }

  function logOut() {
    localStorage.removeItem('user');
  }


}
