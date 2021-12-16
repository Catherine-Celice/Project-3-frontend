import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import { fetchUser } from "../services/UserService";
import CreateYourUserProfileInput from "./CreateYourUserProfileInput";
import DesktopNav from "./DesktopNav";
import '../styles/Login.css';

export default function Login() {
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  let [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const mail = email;
    const password = password1;

    fetchUser(mail, password)
      .then((response) => {
        user.isLoggedIn = true;
        user.firstname = response.firstname;
        user.lastname = response.lastname;
        user.email = response.email;
        user.password1 = response.password1;
        user.phone = response.phone;
        user.zip = response.zip;
        user.aboutme = response.aboutme;
        user.preferences = response.preferences;
        if (response.petList!.length === 0) {
          user.petList = [];
        } else {
          user.petList = response.petList;
        }
        navigate(`/viewpets`);
      }) //end of then
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setMessage("Invalid log in credentials");
        }
      }); // end of catch
  }

  return (
    <>
    <DesktopNav></DesktopNav>
    <div className="loginPage">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <CreateYourUserProfileInput
          // label="email"
          label="Email Address"
          id="CPForm_email"
          value={email}
          onChange={setEmail}
          required
          minlength={3}
        />
        <CreateYourUserProfileInput
          // label="password1"
          label="Password"
          id="CPForm_password1"
          value={password1}
          onChange={setPassword1}
          required
          minlength={2}
        />

        {/* <p> */}
        <button id="purplebtn"><input type="submit" value="Sign In"/></button>
        {/* </p> */}
      </form>

      {/* How do we put a message here only if the log in is unsuccessful*/}
      <div>
        <h4 className="loginMsg">{message}</h4>
      </div>
    </div>
    </>
  );
}
