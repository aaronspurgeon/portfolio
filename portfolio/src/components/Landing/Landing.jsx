import React from 'react'
import './Landing.scss'
import NavBar from '../NavBar/NavBar'
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function Landing() {
    return (
        <div>
            <div className="landing-text">
                <div className="landing-flex">
                    <p>Logo</p>
                    <h1>Aaron<br />Spurgeon</h1>
                    <div className="social">
                        <a href='https://github.com/aaronspurgeon' target="_blank"><AiFillGithub size={36} /></a>
                        <a href='https://twitter.com/unalikez' target="_blank"><AiFillTwitterCircle size={36} /></a>
                        <a href='https://www.instagram.com/desolatexciv/' target="_blank"><AiFillInstagram size={36} /></a>
                        <a href='https://www.linkedin.com/in/aaron-spurgeon-9919a7183/' target="_blank"><AiFillLinkedin size={36} /></a>
                    </div>
                </div>
                <div className="landing-flex second">
                    <NavBar />
                    <p>- Introduction</p>
                    <h3>Full Stack Developer, based in New Hampshire</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est pariatur quibusdam a alias praesentium iste temporibus, officiis officia commodi magnam quas nostrum possimus aut consectetur nulla velit laboriosam voluptatum?</p>
                </div>
            </div>
        </div>
    )
}



