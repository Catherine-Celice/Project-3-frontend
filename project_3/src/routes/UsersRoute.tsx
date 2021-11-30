// The route is to let us see all registered users in order to test our database and API code.

import { useEffect, useState } from "react";
import User from "../models/User";
import { fetchUsers } from "../services/UserService";
import UsersList from "../components/UsersList";


function UsersRoute() {
    const [ users, setUsers ] = useState<User[]>([]);  
    
      function getUserList() {
        fetchUsers().then((data) => {
          setUsers(data);
        });
      }

      useEffect(() => {
        getUserList();
      }, []);
  
    return (
      <div className="AllUsersRoute">
        <h2>All Users</h2>
        <UsersList users={users}/>
      </div>
    );
  }
  
  export default UsersRoute;


