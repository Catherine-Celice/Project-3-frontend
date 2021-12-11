//This is really the user profile, it was refurbished for this purposed.
//It was originally used to get the api working.

import { useState } from "react";
import User from "../models/User";
import '../styles/UserList.css';
import DesktopNav from "./DesktopNav";

//interface Props {
//  user: User;
//}

//function UsersList({user}: Props) {
  function UsersList() {
      
    const [users, setUsers] = useState<User[]>([
      {image: "cat1_avatar", firstname: "Hanna", lastname: "Svendor", email: "Hanna123@gmail.com", phone: "123-456-1234", password1: "newpassword"},
      {image: "dog1_avatar", firstname: "Salena", lastname: "Galloway", email: "Salena123@gmail.com", phone: "987-654-1234", password1: "password1"},
      {image: "cat2_avatar", firstname: "Heidi", lastname: "Youmans", email: "Heidi123@gmail.com", phone: "345-789-1234", password1: "i8T00MUCH"},
      {image: "dog2_avatar", firstname: "Catherine", lastname: "Celice", email: "Catherine123@gmail.com", phone: "875-423-1234", password1: "TooMuchProgramming"},
    ]);

  return (
    <>
    <div className="UserProfile">
      <div className="Profile">
         <span>
          <img className="UserList__image" src={`../images/Avatars/${users[0].image}.png`} />
        </span>
        <p>
          <label className="first">First Name: </label>
          <span className="UserList__first">{users[0].firstname} </span>
        </p>
        <p>
          <label className="last">Last Name: </label>
          <span className="UserList__last">{users[0].lastname}</span>
        </p>
        <p>
          <label className="email">Email: </label>
          <span className="UserList__email">{users[0].email}</span>
        </p>
        <p>
          <label className="phone">Phone: </label>
          <span className="UserList__phone">{users[0].phone}</span>
        </p>
        <p>
          <label className="password">Password: </label>
          <span className="UserList__password">{users[0].password1}</span>
        </p>
        <p>
          <label className="zip">Zip Code: </label>
          <span className="UserList__zip">{users[0].zip}</span>
        </p>
        <p className="about">
          <label className="aboutMe">About Me: </label>
          <span className="UserList__aboutme">{users[0].aboutme}</span>
        </p>
        <p>
          <label className="prefrences">Preferences: </label>
          <span className="UserList__prefrences">{users[0].preferences}</span>
        </p>
      </div>
    </div>
    </>
  );
}

export default UsersList;