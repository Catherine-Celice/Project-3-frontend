import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import User from "../models/User";
import { fetchUsers } from "../services/UserService";
import { addUser } from "../services/UserService";
import UsersList from "../components/UsersList";



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


