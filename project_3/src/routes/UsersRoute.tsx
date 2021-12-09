// The route is to let us see all registered users in order to test our database and API code.

import { useEffect, useState } from "react";
import User from "../models/User";
import { fetchUser } from "../services/UserService";
import UsersList from "../components/UsersList";
import { useParams } from "react-router";
import  '../App.css';
//import { useNavigate } from "react-router-dom";

function UsersRoute() {
  //const history = useNavigate();
  const { email } = useParams<string>();
  const { password1, setPassword1 } = useParams<string>();
  const [ user, setUser ] = useState<User>();  


    useEffect(() => {
      if(email && password1) {
        fetchUser(email, password1).then(res => setUser(res));
      }
      else if(!email || ! password1) {
        alert('No user found. Would you like to create a profile?');
      }
    }, [email, password1]);
  
    return (
      <div className="UserProfileRoute">
        <h2>User Profile</h2>
        <UsersList/>
        {/* <UsersList user={user!}/> */}
        <div className="UserProfile__button">
          <button className="UserList__backButton">Back</button>
          <button className="UserList__editButton" >Edit Profile</button>
        </div>
      </div>
    );
  }
  
  export default UsersRoute;


