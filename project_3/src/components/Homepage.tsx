import React from "react";
import { Link } from "react-router-dom"; import DesktopNav from "./DesktopNav";
import '../styles/Homepage.css';
{/*added Link*/ }

function Homepage() {
    return (
        <div>
            <DesktopNav />
            <div className="Homepage">
                <div className="HeroContent">
                    <h2>Find your true love.</h2>
                    <h3>We help you meet the purrfect match and adopt a lifelong, furry friend from shelters and rescues.</h3>
                    <div className="homebtns">
                        <button id="orangebtn"><Link to="/signup" className="buttons">Find Your Match</Link></button>
                        <button id="purplebtn"><Link to="/viewpets" className="buttons">View Available Pets</Link></button>
                    </div>
                    <div className="signin">
                        <p>Already have an account?</p>
                        <p className="textLink"><Link to="/signin">Sign In</Link></p>
                    </div>
                </div>
                <div className="HomeImg">
                    <img id="DesktopImg" src="/images/Pics/DesktopImage.png" />
                    <img id="MobileImg" src="/images/Pics/MobileHomeImage.png"/>
                </div>
            </div>
            <div id="acclaim">
      <div>
        <a id="dog" href='https://www.freepik.com/vectors/icons'>Icons vector created by rawpixel.com - www.freepik.com</a><br></br>
        <a id="cat" href='https://www.freepik.com/vectors/animals'>Animals vector created by agnessz_arts - www.freepik.com</a>
      </div>
    </div>
        </div>
    )
}

export default Homepage;