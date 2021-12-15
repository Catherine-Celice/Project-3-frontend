// The route is to let us see all registered users in order to test our database and API code.

import { useEffect, useState } from "react";
import User from "../models/User";
import { fetchUser, updateUser } from "../services/UserService";
import UsersList from "../components/UsersList";
import { useParams } from "react-router";
import  '../App.css';
import { Link } from "react-router-dom";
import PreferencesForm from "../components/Preferences";
//import { useNavigate } from "react-router-dom";

function UsersRoute() {
  //const history = useNavigate();
  const { email } = useParams<string>();
  const { password1, setPassword1 } = useParams<string>();
  const [user, setUser] = useState<User>();

  function UpdateUserProfile(user: User): void {
    setUser(prev => [... prev, user]);
    updateUser(user);
  };
    useEffect(() => {
        fetchUser(email, password1).then(res => setUser(res));
      });
  
    return (
      <div className="UserProfileRoute__body">
        <div className="UserProfileRoute">
         
          <UsersList onSubmit={function (user: User): void {
            throw new Error("Function not implemented.");
          } }/>
          <PreferencesForm/>
          {/* <UsersList user={user!}/> */}
          <div className="UserProfile__button">
            <button className="UserList__backButton"><Link to="/" className="buttons">Home</Link></button>
            <button className="UserList__editButton" ><Link to="/" className="buttons">Edit</Link></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default UsersRoute;


