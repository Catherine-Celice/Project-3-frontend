import User from "../models/User";
import UserLink from "./UserLink";
import '../styles/UsersList.css';
import { useImperativeHandle } from "react";


interface Props {
  users: User[]
}

function UsersList({users}: Props) {
  return (
    <div className="UserList">
      <form className="Profile">
        {users.map(user => <div className="User" key={user._id}>
          <p>
            <label>First Name: </label>
            <span className="UserList__first">{user.firstname} </span>
          </p>
          <p>
            <label>Last Name: </label>
            <span className="UserList__last">{user.lastname}</span>
          </p>
          <p>
            <label>Email: </label>
            <span className="UserList__email">{user.email}</span>
          </p>
          <p>
            <label>Phone: </label>
            <span className="UserList__phone">{user.phone}</span>
          </p>
          <p>
            <label>Password: </label>
            <span className="UserList__password">{user.password1}</span>
          </p>
        </div>)}
      </form>
    </div>
  );
}

export default UsersList;