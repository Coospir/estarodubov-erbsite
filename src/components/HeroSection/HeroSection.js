import React from 'react'
import Button from "../Button/Button"
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
     <div className='hero-container'>
         <video src='/src/videos/video-2.mp4' />
         <h1>Hi!</h1>
         <p>My name is Evgenii. I am becoming a Full-Stack Web Developer.</p>
         <div className="hero-btns">
             <Button link='/my-works' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>My works <i className="fas fa-chevron-right"></i></Button>
             <Button link='/about-me' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>About me <i className="fas fa-chevron-right"></i></Button>
         </div>
     </div>
    )
}

export default HeroSection