import axios from 'axios';

export default function logUserIn(){
  return axios.get(`localhost:8080`)
}
