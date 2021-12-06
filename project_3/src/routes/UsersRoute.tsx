// The route is to let us see all registered users in order to test our database and API code.

import { useEffect, useState } from "react";
import User from "../models/User";
import { fetchUser } from "../services/UserService";
import UsersList from "../components/UsersList";
import { useParams } from "react-router";
//import { useNavigate } from "react-router-dom";

function UsersRoute() {
  //const history = useNavigate();
  const { email } = useParams<string>();
  const [ user, setUser ] = useState<User>();  
  
    useEffect(() => {
      if(email) {
        fetchUser(email).then(res => setUser(res));
      }
      else if(!email) {
        alert('No user found');
      }
    }, [email]);
  
    return (
      <div className="UserProfileRoute">
        <h2>User Profile</h2>
        <UsersList/>
        {/* <UsersList user={user!}/> */}
        <button className="UserList__backButton">Back</button>
        <button className="UserList__editButton" >Edit Profile</button>
      </div>
    );
  }
  
  export default UsersRoute;


