import React from 'react'
import Button from "../Button/Button"
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to get interesting newsletter about my life
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe it any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button buttonStyle='btn--outline' link='/subscribe'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/link1'>Link 1</Link>
                        <Link to='/link2'>Link 2</Link>
                        <Link to='/link3'>Link 3</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>My Works</h2>
                        <Link to='/link1'>Link 1</Link>
                        <Link to='/link2'>Link 2</Link>
                        <Link to='/link3'>Link 3</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Social Network</h2>
                        <Link to='/link1'>Link 1</Link>
                        <Link to='/link2'>Link 2</Link>
                        <Link to='/link3'>Link 3</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            ES<i className="fas fa-brain"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>ES ©2021</small>
                    <div className='social-icons'>
                        <Link to='/' target="_blank" aria-label="instagram" className="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to='/' target="_blank" aria-label="telegram" className="social-icon-link telegram">
                            <i className="fab fa-telegram-plane"></i>
                        </Link>
                        <Link to='/' target="_blank" aria-label="youtube" className="social-icon-link youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to='/' target="_blank" aria-label="linkedin" className="social-icon-link linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer