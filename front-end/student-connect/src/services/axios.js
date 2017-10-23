import axios from 'axios';

export default function logUserIn(){
  return axios.get(`https://localhost:8080/classmates`)
}
