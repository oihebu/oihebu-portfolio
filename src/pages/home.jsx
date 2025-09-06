import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css' 

// images for main
import heroimg from '../assets/hero.gif'
import side1img from '../assets/side-combo1.gif'
import side2img from '../assets/side-combo2.gif'

// images for tiles
import bookstore from '../assets/square-bookstore.gif'
import coming from '../assets/square-coming.gif'
import modal from '../assets/square-modal.gif'
import rxtracker from '../assets/square-rxtracker.gif'
import sharepoint from '../assets/square-sharepoint.gif'
import spicely from '../assets/square-spicely.gif'
import wcag from '../assets/square-wcag.gif'
import weather from '../assets/square-weather.gif'
import wurman from '../assets/square-wurman.gif'
// images for links in contact
import github from '../assets/github-white.svg'



export function Home() {
    return (
        <>
        <div id ="top">
            <div id ="top_text_and_image">
            <img src={heroimg} className="top_image" alt="My hero image"/>

            <div className ="top_text">
            <p>hi, i'm otito —</p>
            <p>im a creative. a researcher. an artist. a traveler. a bibliophile. a dreamer.</p>
            <p>and most importantly, a designer. </p>
            <p>nice to meet you!</p>
            <p><b><Link to="#work">↳ my work</Link></b> <b><Link to="/contact">↳ contact me</Link></b></p>
            </div>
            </div>
         </div>

        <div id="main" className= "main_body">
        <section id ="work">
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
           </section> 
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

        </>
    )
}