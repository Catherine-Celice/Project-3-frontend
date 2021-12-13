import axios from "axios";
import React from "react-dom/node_modules/@types/react";
import User from "../models/User";
import UserLogin from "../models/UserLogin";


const baseUrl = 'https://us-central1-project-3-2f2c3.cloudfunctions.net/api'




// CAC: untested
// export function fetchUser(email: string, password1: string):Promise<User> {
//     return axios.get(`${baseUrl}/users/${encodeURIComponent(email)}`)
//     .then(res => res.data[0]);
//   }

// CAC: untested
export function fetchUser(email: string, password1: string):Promise<User> {
    return axios.get(`${baseUrl}/user/:${email}/:${password1}`)
    .then(res => res.data[0])
    .catch((error) => {
      if (error.response && error.response.status === 404) 
      {
        console.clear();
      };
    }); // end of catch
        
  };
  


// CAC: tested
export function addUser(newUser:User):Promise<User> {
    return axios.post(`${baseUrl}/users`, newUser)
    .then(res => res.data);
  }

  // export function updateUser(u:User):Promise<User> {
  //   return axios.put(`${baseUrl}/users`, u)
  //  .then(res => res.data)
  // .catch((error) => {
  //   if (error.response && error.response.status === 404) 
  //   {
  //     console.clear();
  //   };
  // }); // end of catch
  
  // }

  // export function addPet(petid: string):Promise<User> {
  //   return axios.put(`${baseUrl}/addpet/:${email}/:${password1}`, petid)
  //  .then(res => res.data);
    // .catch((error) => {
  //   if (error.response && error.response.status === 404) 
  //   {
  //     console.clear();
  //   };
  // }); // end of catch
  // }

  // export function removePet(petid: string):Promise<User> {
  //   return axios.put(`${baseUrl}/removepet/:${email}/:${password1}`, petid)
  //  .then(res => res.data)
  //  .catch((error) => {
  //   if (error.response && error.response.status === 404) 
  //   {
  //     console.clear();
  //   };
  // }); // end of catch;
 // }



