import React from 'react'
import { Link } from 'react-router'
import './NavBar.scss'

export default function NavBar() {
    return (
        <div>
            <a href="#" className='nav-link'>Projects</a>
            <a href="#" className='nav-link'>Contact Me</a>
        </div>
    )
}