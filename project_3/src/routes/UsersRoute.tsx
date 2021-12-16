// The route is to let us see all registered users in order to test our database and API code.

import { useContext, useEffect, useState } from "react";
import User from "../models/User";
import { fetchUser, updateUser } from "../services/UserService";
import UsersList from "../components/UsersList";
import { useParams } from "react-router";
import  '../App.css';
import { Link } from "react-router-dom";
import PreferencesForm from "../components/Preferences";
import { UserContext } from "../context/UserContextProvider";
//import { useNavigate } from "react-router-dom";

function UsersRoute() {
  //const history = useNavigate();
  const [ email, setEmail ] = useState<string>('');
  const [ password1, setPassword1 ] = useState<string>('');
  const { user } = useContext(UserContext);
  // const [user, setUser] = useState<User>();

  function UpdateUserProfile(): void {
    updateUser(user.email, user.password1, user);
  };
    useEffect(() => {
        // fetchUser(email, password1).then(res => setUser(res));
    });
  
    return (
      <div className="UserProfileRoute__body">
        <div className="UserProfileRoute">
          <UsersList onSubmit={UpdateUserProfile} />
          {/* <UsersList onSubmit={function (user: User): void {
            throw new Error("Function not implemented.");
          } }/> */}
          <PreferencesForm/>
          {/* <UsersList user={user!}/> */}
          <div className="UserProfile__button">
          <button className="UserList__backButton"><Link to="/myfavoritepets" className="buttons">My Favorites</Link></button>
            <button className="UserList__backButton"><Link to="/" className="buttons">Home</Link></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default UsersRoute;


