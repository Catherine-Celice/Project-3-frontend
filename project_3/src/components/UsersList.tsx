import User from "../models/User";
import UserLink from "./UserLink";
import './UsersList.css';


interface Props {
  users: User[]
}

function UsersList({users}: Props) {
  return (
    <div className="UserList">
      <ul>
        {users.map(user => <li key={user._id}>
          <span className="UserList__first">{user.firstname} </span>
          <span className="UserList__last">{user.lastname}</span>
        </li>)}
      </ul>
    </div>
  );
}

export default UsersList;