import React from 'react'
import Limg from '../Images/LpageImg.jpg'

function Landingcontent() {
    return (
        <section className="lPageContent">
                <div className="introTxt">
                    <h1>Lorem ipsum dolor sit amet,</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <div className="lPageBookbtn">
                        <a href="#endpoint">Book a Day now</a>
                    </div>
                </div>
                <div className="imgLanding">
                   <div className="landingimgspace"> <img src={Limg} alt="Landing page lady" className="LandingImg"/></div>
                    <p>sjjsk</p>
                </div>
            </section>
    )
}

export default Landingcontent
