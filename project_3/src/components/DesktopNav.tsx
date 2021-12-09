import React from "react";
import { Link } from "react-router-dom"; {/*added Link*/}

function DesktopNav(){
    return (
        <div>
            <nav>
                <div className="NavBar">
                    <h1><img className="NavIcon" src="/images/Avatars/pawfectpals.png" width="60" />Pawfect Pals</h1>
                <div className="NavBarLinks">
                    <a><Link to="/viewpets">View Available Pets</Link></a>
                    <a><Link to="/myprofile">My Profile</Link></a>
                    <button className="navSignUp"><Link to="/signup" className="buttons">Sign Up</Link></button>
                </div>
                </div>
            </nav>
        </div>
    )
 }

export default DesktopNav;