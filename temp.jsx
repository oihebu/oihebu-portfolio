import React, { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// images for main
import heroimg from './assets/hero.gif'
import side1img from './assets/side-combo1.gif'
import side2img from './assets/side-combo2.gif'

//resume file
import resume from './assets/resume.pdf'
// images for tiles
import bookstore from './assets/square-bookstore.gif'
import coming from './assets/square-coming.gif'
import modal from './assets/square-modal.gif'
import rxtracker from './assets/square-rxtracker.gif'
import sharepoint from './assets/square-sharepoint.gif'
import spicely from './assets/square-spicely.gif'
import wcag from './assets/square-wcag.gif'
import weather from './assets/square-weather.gif'
import wurman from './assets/square-wurman.gif'
// images for links in contact
import github from './assets/github-white.svg'


function App() {



  return (
    <>

  
        <header>
            <button id="theme-switch">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z"/></svg>                
            </button>
            
            <nav className="navbar">
                
                    <div id="logo">
                    <h1><a href="#">otito ihebuzor</a></h1>
                    </div>

                    <ul id ="menuList">
                        <li><a href="#work">work</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href={resume} download>resume</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>

                    <div className="menu-icons">
                        {/* <i className="fa-solid fa-bars" onClick={toggleMenu()}></i> */}
                     </div>
            </nav>
        </header>


         <section id ="top">
            <div id ="top_text_and_image">
            <img src={heroimg} className="top_image" alt="My hero image"/>

            <div className ="top_text">
            <p>hi, i'm otito —</p>
            <p>im a creative. a researcher. an artist. a traveler. a bibliophile. a dreamer.</p>
            <p>and most importantly, a designer. </p>
            <p>nice to meet you!</p>
            <p><b><a href ="#work">↳ my work</a></b> <b><a href ="#contact">↳ contact me</a></b></p>
            </div>
            </div>
         </section>

        <div id="main" className= "main_body">
        <div id ="work">
            <div className = "work_bar">
            <h2>work</h2> 
            <h5>what i've made</h5>
            </div>
            
            <div className = "work_ex">
                <div className="work_tile">
                <a href =""><img className = "work_image" src={spicely}/></a>
                <h4><a href="/">spicely case study</a></h4>
                <p>Follows the journey from creating an original product to developing an immersive online shopping experience for its distribution.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={wurman}/></a>
                <h4><a href="/">wurman-latch redesign</a></h4>
                <p>A detailed look on how LATCH methodology can be utilized to refine the organization of a major e-commerce site.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={sharepoint}/></a>
                <h4><a href="/">sharepoint redesign</a></h4>
                <p>Outlines the ideation and research stages of remodeling an internal resource hub.</p>
                </div>
                
                <div className="work_tile">
                <a href =""><img className = "work_image" src={rxtracker}/></a>
                <h4><a href="/">rx tracker redesign</a></h4>
                <p>Documents how years of healthcare information were transformed into a simple-to-use, cloud-based tool.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={modal}/></a>
                <h4><a href="/">modal redesign</a></h4>
                <p>An innovative modal design that encourages users to sign-up for a fictional subscription.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={wcag}/></a>
                <h4><a href="/">wcag learning design</a></h4>
                <p>Designed WCAG-compliant visuals to educate on accessibility best practices for Bank of America.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={weather}/></a>
                <h4><a href="/">react weather app</a></h4>
                <p>Utilized React to develop a functional weather application that loads current data from the OpenWeatherAPI based on a location of choice.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={bookstore}/></a>
                <h4><a href="/">dom book store app</a></h4>
                <p>Built a functional bookstore application that allows for the submission of data and fetches data from a provided API.</p>
                </div>

                <div className="work_tile">
                <a href =""><img className = "work_image" src={coming}/></a>
                <h4><a href="/">e-commerce platform</a></h4>
                <p>Built a full-stack e-commerce platform that enables users to browse products, manage carts, and complete secure payments, while featuring authentication, admin dashboards, and responsive design. </p>
                </div>

            </div>
           </div> 
           </div>

        <div id ="about">
            <div className = "about_bar">
            <h2>about</h2>
            <h5>a bit more about me</h5>
            </div>

            <div id="about_text">
            <div id = "about_me_1">
            <img className = "about_image1" src={side1img} alt="Image of my favorite things(1)"/>
            <p><b>who i am. . . </b> i'm a natural creative with a love for finding simple solutions for complex problems. i prioritize collaborating with fellow designers and fostering inclusive spaces. i'm passionate about accessibility and equity in design, and my experience with cross-functional teams proves that. outside of work, i'm a learning artist, a book lover, a beginner runner, and an avid horror fan.</p>
            <p><b>what i know . . .</b> i'm a graduate of <u>nc state university</u> with a bachelors' degree in business administration (focus in supply chain management) and a minor in arts' entrepreneurship. i am also graduate of the <u>interapt ux design cohort</u> and the <u>npower full stack development program</u>.</p>
            </div>

            <div id = "about_me_2">
            <img className = "about_image2" src={side2img} alt="Image of my favorite things(2)"/>
            <p><b>what i can do . . .</b> <mark>skills</mark> css · html · javascript · angular · react · mongodb  <mark>tools</mark> adobe photoshop · adobe after effects · figma + figjam · google suite · github · gitlab · microsoft office · miro · sharepoint · sony vegas pro · vscode <mark>methods</mark> card sorting · content strategy · information architecture · journey mapping · model making · personas · project management · prototyping · research · storyboarding storytelling · surveys · user interface · user interviews · visual design · wireframing</p>
            </div>
            </div>

            </div>

        <div className="footer">
        <div id ="contact">
            <div className = "contact_bar">
            <h2>contact</h2>
            <div>

            </div>
            <div className = "contact_links">
                <div id="theme-switch-links" >
                <button id="github-link"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 24 24"> <a href="/" target="_blank"> <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></a> </svg></button>
                <button id="linkedin-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px"> <a href="/" target="_blank"> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></a></svg></button>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        <div className="footer">
        <p>© 2020 - 2025 ooihebuz.com · all rights reserved </p>
       </div>

    <script src="script.js"></script>
    <script src="http://kit.fontawesome.com/f2d3b47fa9.js" crossOrigin="anonymous"></script>


    </>
  )
}

export default App
