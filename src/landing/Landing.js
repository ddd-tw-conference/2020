import React from 'react'
import './landing.css'
import whiteLogo from '../img/white_DDD_logo.jpg'
import location from '../img/location.svg'
import clock from '../img/clock.svg'

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1 className="text-left text-white">Domain Driven Design Taiwan</h1>
                        <h1 className="text-left text-white">領域驅動設計年會</h1>
                        <div className="mt-4">
                            <button type="button" className="btn btn-outline-light float-left">我要參加</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={whiteLogo} alt="whiteLogo" height="200" />
                    </div>
                </div>
            </div>
            <div className="container time-margin">
                <div className="row">
                    <div className="col-2 list-inline mt-5">
                        <img className="list-inline-item" src={location} alt="location" height="30" />
                        <p className="text-white list-inline-item">Taipei, Taiwan</p>
                    </div>
                    <div className="col-2 list-inline mt-5">
                        <img className="list-inline-item" src={clock} alt="clock" height="30" />
                        <p className="text-white list-inline-item">7 Nov 2020</p>
                    </div>
                    <div className="col-2">
                        <div className="countdown-border">
                            <h1 className="text-white mt-4">97</h1>
                            <p className="text-white">Days</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="countdown-border">
                            <h1 className="text-white mt-4">09</h1>
                            <p className="text-white">Hrs</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="countdown-border">
                            <h1 className="text-white mt-4">20</h1>
                            <p className="text-white">Mins</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="countdown-border">
                            <h1 className="text-white mt-4">43</h1>
                            <p className="text-white">Secs</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing
