import React from 'react'
import './Landing.scss'
import NavBar from '../NavBar/NavBar'
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import img from '../../images/portfolio.png'

export default function Landing() {
    return (
        <div>
            <div className="landing-text">
                <div className="landing-flex">
                    <h1 className='name'>Aaron<br />Spurgeon.</h1>
                    <div className="social">
                        <a href='https://github.com/aaronspurgeon' target="_blank" className='icons'><AiFillGithub size={36} /></a>
                        <a href='https://twitter.com/unalikez' target="_blank" className='icons'><AiFillTwitterCircle size={36} /></a>
                        <a href='https://www.instagram.com/desolatexciv/' target="_blank" className='icons'><AiFillInstagram size={36} /></a>
                        <a href='https://www.linkedin.com/in/aaron-spurgeon-9919a7183/' target="_blank" className='icons'><AiFillLinkedin size={36} /></a>
                    </div>
                </div>
                <div className="landing-flex second">
                    <NavBar />
                    <p className='intro-text'>- Introduction</p>
                    <h3 className='title'>Full Stack Developer, based in New Hampshire</h3>
                    <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est pariatur quibusdam a alias praesentium iste temporibus.</p>
                </div>
            </div>
        </div>
    )
}



