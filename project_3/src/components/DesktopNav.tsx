import React, { useContext } from "react";
import '../styles/DesktopNav.css';
import { Link } from "react-router-dom";import { UserContext } from "../context/UserContextProvider";
 {/*added Link*/}

function DesktopNav(){
    const { user } = useContext(UserContext);
    return (
        <div>
            <nav>
                <div className="NavBar">
                    <Link to="/"><h1 className="NavPP"><img className="NavIcon" src="/images/Avatars/pawfectpals.png" width="60"/>PawfectPals</h1></Link>
                <div className="NavBarLinks">
                    <a><Link to="/viewpets" id="NavPets">Available Pets</Link></a>
                    <a><Link to="/myprofile" id="NavProfile">My Profile</Link></a>
                    { user.isLoggedIn ?
                      <button className="navSignUp">Welcome {user.firstname}</button>
                    : <button className="navSignUp"><Link to="/signup" className="buttons">Sign Up</Link></button>
                    }
                </div>
                </div>
            </nav>
        </div>
    )
 }

export default DesktopNav;