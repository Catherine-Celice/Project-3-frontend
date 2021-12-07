import React from "react";
import { Link } from "react-router-dom"; import DesktopNav from "./DesktopNav";
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
                    <img src="/images/Pics/DesktopImage.png" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;