import axios from "axios";
import User from "../models/User";

const baseUrl = 'https://us-central1-project-3-2f2c3.cloudfunctions.net/api'

// CAC: untested
export function fetchUsers():Promise<User[]> {
    return axios.get<User[]>(`${baseUrl}/users`).then(res => res.data);
  }
  
// CAC: untested
export function addUser(newUser:User):Promise<User> {
    return axios.post(`${baseUrl}/users`, newUser).then(res => res.data);
  }
  

