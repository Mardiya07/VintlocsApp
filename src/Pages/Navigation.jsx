import React from 'react'

function Navigation() {
    return (
        <div className="navigation">
        <div className="logo">Logo</div>
        <div><a href="#endpoint" className="btnBooking navfont">Book an appointment</a></div>
        <div className="navlinks">
            <a href="#endpoint">Gallery</a>
            <a href="#endpoint">Shop</a>
            <a href="#endpoint">Blog</a>
            <a href="#endpoint">Contact Us</a>
            <a href="#endpoint">Some Stuff</a>
        </div>
    </div>
    )
}

export default Navigation
