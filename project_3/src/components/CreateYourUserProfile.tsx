// CAC: This needs MAJOR rework
import { FormEvent, useEffect, useState } from "react";
import User from "../models/User";
import UserLink from "./UserLink";
import UsersList from "./UsersList";

//import { fetchUsers } from "../services/UserService";
import { addUser } from "../services/UserService";
import '../styles/CreateYourUserProfile.css';
import CreateYourUserProfileInput from './CreateYourUserProfileInput';
import DesktopNav from "./DesktopNav";


function checkPasswords(p1: string, p2: string): boolean {
  return (p1 === p2);
};



// TO DO -- CAC: need to figure out what goes inside this interface

// interface Props {
//     //initialTo?: string;
//     onAdd?: (user: User) => void;    // CAC: Should this be onSubmit?
//     //onAdd: (user: User) => User;
//   };


function CreateYourUserProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [zip, setZip] = useState("");
  const [aboutMe, setAboutMe] = useState("");


  //useEffect(() => setTo(initialTo), [initialTo]);




  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TO DO: we need to write an else part -- in case password1 and password2 don't match
    if (checkPasswords(password1, password2)) {

      const newUser: User = {
        firstname: firstname, lastname: lastname, email: email, phone: phone,
        password1: password1, zip: zip, aboutme: aboutMe, isLoggedIn: true, petList: []
      };



      addUser(
        newUser
      ).then();
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setPassword1("");
      setPassword2("");
      setZip("");
      setAboutMe("");


    } else {
      // TO DO -- what will we do if the passwords enteed don't match each other
    }
  } // end of handleSubmit

  return (
    <>
      <DesktopNav></DesktopNav>
      <form className="CPform" onSubmit={handleSubmit}>
        <div className="CreateProfile">
          <h1>Create Your Profile</h1>
          <div className="CPFormInputs">
            <div className="CPGroup">
              <CreateYourUserProfileInput label="First Name" id="CPForm_firstname" value={firstname} onChange={setFirstname} required minlength={2} />
              <CreateYourUserProfileInput label="Last Name" id="CPForm_lastname" value={lastname} onChange={setLastname} required minlength={2} />
            </div>
            <div className="CPGroup">
              <CreateYourUserProfileInput label="Email Address" id="CPForm_email" value={email} onChange={setEmail} required minlength={3} />
            </div>
            <div className="CPGroup">
            <CreateYourUserProfileInput label="Password" id="CPForm_password1" value={password1} onChange={setPassword1} required minlength={2} />
            <CreateYourUserProfileInput label="Confirm Password" id="CPForm_password2" value={password2} onChange={setPassword2} required minlength={2} />
            </div>
            <div className="CPGroup">
            <CreateYourUserProfileInput label="Phone Number" id="CPForm_phone" value={phone} onChange={setPhone} required minlength={0} />
            <CreateYourUserProfileInput label="Zip Code" id="CPForm_zip" value={zip} onChange={setZip} required minlength={5} />
            </div>
            <CreateYourUserProfileInput label="About Me" id="CPForm_aboutMe" value={aboutMe} onChange={setAboutMe} required minlength={0} />
            {/* Why is this here? (below) */}
            {/* <p className="CYUPInput">
              <label htmlFor="CreateYourUserProfile_user"></label>

              <textarea id="AddAboutMe__aboutMe" value={aboutMe} onChange={e => setAboutMe(e.target.value)} required minLength={0} rows={5} />
            </p> */}
            <p>
              <button className="Register" id="purplebtn">Register</button>
            </p>
          </div>
        </div>
      </form>
    </>
  )


}



export default CreateYourUserProfile;
function handleRoute(arg0: string): void {
  throw new Error("Function not implemented.");
}

