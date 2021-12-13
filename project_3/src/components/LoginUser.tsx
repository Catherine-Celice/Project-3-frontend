// CAC: This needs MAJOR rework
import { FormEvent, useEffect, useState } from "react";
import User from "../models/User";
import UserLink from "./UserLink";
import UsersList from "./UsersList";
import UserLogin from "../models/UserLogin";
import { fetchUser } from "../services/UserService";
//import { addUser } from "../services/UserService";
import '../styles/LoginUser.css';
import LoginUserInput from './LoginUserInput';
import React from "react";
//import axios from "axios";
//import { error } from "console";




// TO DO -- CAC: need to figure out what goes inside this interface

// interface Props {
//     //initialTo?: string;
//     onAdd?: (user: User) => void;    // CAC: Should this be onSubmit?
//     //onAdd: (user: User) => User;
//   };


function LoginUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [zip, setZip] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  let [message, setMessage] = useState("");

  //useEffect(() => setTo(initialTo), [initialTo]);


  //<p>{message}</p>



  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   // TO DO: we need to write an else part -- in case password1 and password2 don't match
  //   if (checkPasswords(password1, password2)) {

  //     const newUser: User = {
  //       firstname: firstname, lastname: lastname, email: email, phone: phone,
  //       password1: password1, zip: zip, aboutme: aboutMe
  //     };





  //   } else {
  //     // TO DO -- what will we do if the passwords enteed don't match each other
  //   }
  // } // end of handleSubmit


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const mail = email;
    const password = password1;

    useEffect(() => {
      fetchUser(
        mail, password
      ).then(response => {

      

      })//end of then
        .catch(error => {
          if (error.response && error.response.status === 404) {
            setMessage("Invalid log in credentials")
          }
        }); // end of catch

    }); // end of useEffect

  
   

    
    setEmail("");
    setPassword1("");

  } // end of handleSubmit

  // componentDidMount() {
  //   getAllPeople().then(response => {
  //      if(response!=error) //error is the error object you can get from the axios call
  //         this.setState(() => ({ people: response}));
  //      else { // your error handling goes here
  //       }
  //    });
  //  } 

  // Stack OverflowStack Overflow
  // Handling Axios error in React
  // I have a React component that calls a function getAllPeople: componentDidMount() { getAllPeople().then(response => { this.setState(() => ({ people: response.data })); }); }

  return (
    <div className="loginPage">
      <form className="loginform" onSubmit={handleSubmit}>
        <h2>Enter your log in credentials here</h2>

        <LoginUserInput label="email" id="CPForm_email" value={email} onChange={setEmail} required minlength={3} />
        <LoginUserInput label="password1" id="CPForm_password1" value={password1} onChange={setPassword1} required minlength={2} />

        <p>
          <button>Log in!</button>
        </p>
      </form>

      {/* How do we put a message here only if the log in is unsuccessful*/}
      <div>
        <h2 className="loginMsg">{message}</h2>
      </div>
    </div>

  )


}



export default LoginUser;
