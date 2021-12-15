//This is really the user profile, it was refurbished for this purposed.
//It was originally used to get the api working.

import { FormEvent, useState } from "react";
import User from "../models/User";
import '../styles/UserList.css';
import DesktopNav from "./DesktopNav";

interface Props {
 onSubmit: (user: User) => void;
}

//function UsersList({user}: Props) {
  function UsersList({onSubmit}: Props) {
      
     const [users, setUsers] = useState<User[]>([
    //   {image: "cat1_avatar", firstname: "Hanna", lastname: "Svendor", email: "Hanna123@gmail.com", phone: "123-456-1234", password1: "newpassword"},
    //   {image: "dog1_avatar", firstname: "Salena", lastname: "Galloway", email: "Salena123@gmail.com", phone: "987-654-1234", password1: "password1"},
      {image: "cat2_avatar", firstname: "Heidi", lastname: "Youmans", email: "Heidi123@gmail.com", phone: "345-789-1234", password1: "i8T00MUCH", isLoggedIn: true, petList:[]},
    //   {image: "dog2_avatar", firstname: "Catherine", lastname: "Celice", email: "Catherine123@gmail.com", phone: "875-423-1234", password1: "TooMuchProgramming"},
     ]);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password1, setPassword1] = useState("");
    const [zip, setZip] = useState("");
    const [aboutme, setAboutMe] = useState("");

    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      const user: User = {
        firstname,
        lastname,
        email,
        phone,
        password1,
        zip,
        aboutme,
        isLoggedIn: false,
        petList: []
      };
      onSubmit(user);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPhone('');
      setPassword1('');
      setZip('');
      setAboutMe('');
    }
    
  return (
    <>
      <form className='UserProfile' onSubmit={handleSubmit}>
        <div className="UserProfile__header">
          <h2>User Profile</h2>
        </div>
        <div className="Profile">
          <span>
            <img className="UserList__image" src={`../images/Avatars/${users[0].image}.png`} />
          </span>
          <p>
            <label htmlFor="UserListForm__first">
              First Name: 
              <input className="UserList__first" value={firstname} onChange={e => setFirstname(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__last">
              Last Name:
              <input className="UserList__last" value={lastname} onChange={e => setLastname(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__email">
              Email:
              <input className="UserList__email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__phone">
              Phone:
              <input className="UserList__phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__password">
              Password:
              <input className="UserList__password" value={password1} onChange={e => setPassword1(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__zip">
              Zip Code:
              <input className="UserList__zip" value={zip} onChange={e => setZip (e.target.value)} />
            </label>
          </p>
          <p className="about">
            <label htmlFor="UserListForm__aboutMe">
              About Me:
              <input className="UserList__aboutme" value={aboutme} onChange={e => setAboutMe (e.target.value)} />
            </label>
          </p>
        </div>
        <input className="updateUser" type="submit" value="Submit Profile Update" />
      </form>
    </>
  );
}

export default UsersList;