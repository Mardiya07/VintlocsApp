import React from 'react'
import Navigation from './Navigation'
import Landingcontent from './Landingcontent'
import Sgallery from './SummaryGallery'
import Adbanner from './Adbanner'
import Sshop from './SummaryShop'

function Home() {
    return (
        <div className="landingpage">
            <Navigation/>
            <Landingcontent/>
            <div className="ctaBtn">
                <a href="#ctabtn">Bookings</a>
            </div>
            <Sgallery/>
            <Adbanner/>
            <Sgallery/>
            <Sshop/>
        </div>
    )
}

export default Home
