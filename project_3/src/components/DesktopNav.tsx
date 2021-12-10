import React from "react";
import '../styles/DesktopNav.css';
import { Link } from "react-router-dom"; {/*added Link*/}


function DesktopNav(){
    return (
        <div>
            <nav>
                <div className="NavBar">
                    <h1 className="NavPP"><img className="NavIcon" src="/images/Avatars/pawfectpals.png" width="60"/>PawfectPals</h1>
                <div className="NavBarLinks">
                    <a><Link to="/viewpets" id="NavPets">View Available Pets</Link></a>
                    <a><Link to="/myprofile" id="NavProfile">My Profile</Link></a>
                    <button className="navSignUp"><Link to="/signup" className="buttons">Sign Up</Link></button>
                </div>
                </div>
            </nav>
        </div>
    )
 }

export default DesktopNav;