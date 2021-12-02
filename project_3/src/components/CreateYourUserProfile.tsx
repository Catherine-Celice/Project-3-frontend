// CAC: This needs MAJOR rework


import { FormEvent, useEffect, useState } from "react";

import User from "../models/User";
import UserLink from "./UserLink";
import UsersList from "./UsersList";

//import { fetchUsers } from "../services/UserService";
import { addUser } from "../services/UserService";

import CreateYourUserProfileFormInput from "./CreateYourUserProfileFormInput";
import './CreateYourUserProfile.css';


//q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24 

// TO DO -- CAC: need to figure out what goes inside this interface
interface Props {
    // initialTo?: string;
    onAdd?: (user: User) => void    // CAC: Should this be onSubmit?
  }


  function CreateYourUserProfile({ onAdd }: Props) {
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ userID, setUserID ] = useState("");
    const [ password1, setPassword1] = useState("");
    const [ password2, setPassword2] = useState("");


    //useEffect(() => setTo(initialTo), [initialTo]);
  
    function checkPasswords(p1: string, p2: string): boolean {
        return(p1 === p2);
    };


    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      // TO DO: we need to write an else part -- in case password1 and password2 don't match
      if(checkPasswords(password1, password2)){
        addUser({
            firstname, lastname, email, phone, userID, password1
          }).then(onAdd);
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setUserID("");
          setPassword1("");
          setPassword2("");

      } else {
          // TO DO -- what will we do if the passwords enteed don't match each other
      }  
      
      return (
          <form className="CPform" onSubmit={handleSubmit}>
              <h2>Crete Your Profile</h2>
              <CreateYourUserProfileFormInput id="CPForm_firstname" value={firstname} onChange={setFirstname} required minlength={2}/>

          </form>
      )
      

    }
  
    // copied from Megan' firebase labs as a template
  //  return (
  //    <form className="AddShoutOutForm" onSubmit={handleSubmit}>
  //      <h3>Leave a Shout Out</h3>
  //      <FormInput label="To" id="AddShoutOutForm__to" value={to} onChange={setTo} required minLength={2}/>
  //      <FormInput label="From" id="AddShoutOutForm__from" value={from} onChange={setFrom} required minLength={2}/>
  //      <p className="FormInput">
  //        <label htmlFor="AddShoutOutForm__shoutout">Shout Out</label>
  //        <textarea id="AddShoutOutForm__shoutout" value={text}  onChange={e => setText(e.target.value)} required minLength={2} rows={4}/>
  //      </p>
  //      <p>
  //        <button>Submit Shout Out!</button>
  //      </p>
  //    </form>
  //  );
  }
  
  export default CreateYourUserProfile;
