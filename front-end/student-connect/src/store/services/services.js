const API_URL = 'http://localhost:8080'

export function getAllStudents() {
  return fetch(`${API_URL}/students`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export function createNewUser(data) {
  fetch(`${API_URL}/students`, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(student:data)
  .catch(err => console.log(err))
}

export function logUserIn(data) {
  fetch(`${API_URL}/students/login`, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(student:data)
  .catch(err => console.log(err))
  }

export function getUserById(userID) {
  fetch(`${API_URL}/students/${studentId}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}
