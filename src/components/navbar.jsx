import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

//resume file

export function Navbar(){
    return (
        <>
        <div className="navbar">

            <div id="logo">
                <h1><Link to="#">otito ihebuzor</Link></h1>
            </div>

            <div>
                <ul id ="menuList">
                <li><Link to="#work">work</Link></li>
                <li><Link to="#about">about</Link></li>
                <li><Link to="#resume">resume</Link></li>
                <li><Link to="/contact">contact</Link></li>
                </ul>
            </div>

        </div>

        </>
    )
}