//This is really the user profile, it was refurbished for this purposed.
//It was originally used to get the api working.

import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import User from "../models/User";
import '../styles/UserList.css';
import DesktopNav from "./DesktopNav";


interface Props {
 onSubmit: (user: User) => void;
}

// function UsersList({user}: Props) {
function UsersList({onSubmit}: Props) {
  
  const { user } = useContext(UserContext);
  
    const [image, setImage] = useState();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password1, setPassword1] = useState("");
    const [zip, setZip] = useState("");
    const [aboutme, setAboutMe] = useState("");

    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      const newUser: User = {
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
      onSubmit(newUser);
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
            <img className="UserList__image" src={`../images/Avatars/cat6_avatar.png`} alt="pic"/>
          </span>
          <p>
            <label htmlFor="UserListForm__first">
              First Name: 
              <input className="UserList__first" value={user.firstname} onChange={e => setFirstname(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__last">
              Last Name:
              <input className="UserList__last" value={user.lastname} onChange={e => setLastname(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__email">
              Email:
              <input className="UserList__email" value={user.email} onChange={e => setEmail(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__phone">
              Phone:
              <input className="UserList__phone" value={user.phone} onChange={e => setPhone(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__password">
              Password:
              <input className="UserList__password" value={user.password1} onChange={e => setPassword1(e.target.value)} />
            </label>
          </p>
          <p>
            <label htmlFor="UserListForm__zip">
              Zip Code:
              <input className="UserList__zip" value={user.zip} onChange={e => setZip (e.target.value)} />
            </label>
          </p>
          <p className="about">
            <label htmlFor="UserListForm__aboutMe">
              About Me:
              <input className="UserList__aboutme" value={user.aboutme} onChange={e => setAboutMe (e.target.value)} />
            </label>
          </p>
        </div>
        {/* <input className="updateUser" type="submit" value="Submit Profile Update" /> */}
      </form>
    </>
  );
}

export default UsersList;