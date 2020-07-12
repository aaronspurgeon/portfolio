import React from 'react'
import './Landing.scss'
import NavBar from '../NavBar/NavBar'

export default function Landing() {
    return (
        <div>
            <div className="landing-text">
                <div className="landing-flex">
                    <p>Logo</p>
                    <h1>Aaron<br />Spurgeon</h1>
                    <div className="social">
                        <a href='https://twitter.com/unalikez' target="_blank">Twitter</a>
                        <a href='https://www.instagram.com/desolatexciv/' target="_blank">Instagram</a>
                        <a href='https://www.linkedin.com/in/aaron-spurgeon-9919a7183/' target="_blank">LinkedIn</a>
                    </div>
                </div>
                <div className="landing-flex">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}



