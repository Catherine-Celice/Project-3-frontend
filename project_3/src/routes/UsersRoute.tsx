// The route is to let us see all registered users in order to test our database and API code.

import { useEffect, useState } from "react";
import User from "../models/User";
import { fetchUser } from "../services/UserService";
import UsersList from "../components/UsersList";
import { useParams } from "react-router";


function UsersRoute() {
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
      </div>
    );
  }
  
  export default UsersRoute;


