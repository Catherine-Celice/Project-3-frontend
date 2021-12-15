import axios from "axios";
import User from "../models/User";

const baseUrl = 'https://us-central1-project-3-2f2c3.cloudfunctions.net/api'

// CAC: untested
// export function fetchUser(email: string, password1: string):Promise<User> {
//     return axios.get(`${baseUrl}/users/${encodeURIComponent(email)}`)
//     .then(res => res.data[0]);
//   }
  
// Salena -- updated to fetch 1 user
export function fetchUser(email: string, password1: string):Promise<User> {
  return axios.get(`${baseUrl}/user/${email}/${password1}`).then(res => res.data);
}
// CAC: untested
export function addUser(newUser:User):Promise<User> {
    return axios.post(`${baseUrl}/users`, newUser).then(res => res.data);
  }
// HSY -- added for the user profile
export function updateUser(email: string, password1: string):Promise<User> {
  return axios.put(`${baseUrl}/user/${email}/${password1}`).then(res => res.data);

export function addFavoritePet(email: string, password: string, petId: string):Promise<User>{
  console.log(`${baseUrl}/addpet/${email}/${password}`);
  return axios.put(`${baseUrl}/addpet/${email}/${password}?petList=${petId}`).then(res => res.data);
}

export function removeFavoritePet(email: string, password: string, petId: string):Promise<User>{
  return axios.put(`${baseUrl}/removepet/${email}/${password}?petList=${petId}`).then(res => res.data);
}

