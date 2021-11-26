import axios from "axios";
import User from "../models/User";

const baseUrl = process.env.REACT_APP_API_URL;


// The following code was copied from Megan's firebase lab 
// to be used as a template when writing out code:

// export function fetchShoutOuts():Promise<ShoutOut[]> {
//     return axios.get(`${baseUrl}/shoutouts`)
//     .then(res => res.data)
//   }
  
//   export function addShoutOut(shoutOut:ShoutOut):Promise<ShoutOut> {
//     return axios.post(`${baseUrl}/shoutouts`, shoutOut).then(res => res.data);
//   }
  
//   export function fetchShoutOutsTo(user: string):Promise<ShoutOut[]> {
//     return axios.get(`${baseUrl}/shoutouts`, {
//       params: { to: user }
//     })
//     .then(res => res.data)
//   }





export function fetchUsers():Promise<User[]> {
    return axios.get(`${baseUrl}/users`)
    .then(res => res.data)
  }
  
  export function addUser(newUser:User):Promise<User> {
    return axios.post(`${baseUrl}/users`, newUser).then(res => res.data);
  }
  

