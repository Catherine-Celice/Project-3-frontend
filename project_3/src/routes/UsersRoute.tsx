// The route is to let us see all registered users in order to test our database and API code.

import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import User from "../models/User";
import { fetchUsers } from "../services/UserService";
import UsersList from "../components/UsersList";
import { addUser } from "../services/UserService";


function UsersRoute() {
    const [ users, setUsers ] = useState<User[]>([]);
    useEffect(loadUsers, [])
  
    function loadUsers() {
      fetchUsers().then(setUsers);
    }
  
    return (
      <div className="AllUsersRoute">
        <h2>All Users</h2>
        <UsersList users={users}/>
        {/* <AddShoutOutForm onAdd={loadShoutOuts} /> */}
      </div>
    );
  }
  
  export default UsersRoute;


