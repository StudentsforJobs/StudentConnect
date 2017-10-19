export const ADD_USER = 'ADD_USER';
// export const UPDATE_USER = 'UPDATE_USER';

export const addUser = username => {
  return {
    type: actionTypes.ADD_USER,
    payload: username
  }
}
