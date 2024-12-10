import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'

import placeholderImage from '../../assets/profile.jpg'
import lolIcon from '../../assets/about-icons/wr_lol.png'
import gamepadIcon from '../../assets/about-icons/gamepad.svg'
import badoIcon from '../../assets/about-icons/bado.svg'
import esportsIcon from '../../assets/about-icons/esports.svg'

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            
            <main className="about-content">
                <div className="about-section">
                    <div className="about-image">
                        <img src={placeholderImage} alt="Mohammed Bajaman" />
                        <div className="image-overlay"></div>
                    </div>
                    
                    <div className="about-text">
                        <h1 className="section-title">About Me</h1>
                        <p className="subtitle">Software Engineer | Game Developer | IT Expert</p>
                        
                        <div className="about-description">
                            <p>
                                Hello! I'm Mohammed, a software engineer and game developer 
                                based in Vancouver, BC. I specialize in creating solutions 
                                through code, whether it's developing scalable software applications 
                                or creating fun to play games.
                            </p>
                            
                            <p>
                                With a background in software engineering, game dev, AI, and 5+ years in IT,
                                I bring a unique perspective to problem-solving. I enjoy learning
                                new things and applying them to real-world problems.
                            </p>
                            <p><i>Psst hover the peeking images</i> 👀</p>

                            <div className="quick-info-container">
                                <div className="quick-info">
                                    <div className="info-item">
                                        <span className="label">Location</span>
                                        <span className="value">Vancouver, BC</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Email</span>
                                        <span className="value">mohammed_bajaman@hotmail.com</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Degree</span>
                                        <span className="value">BTech (opt. Games Development)</span>
                                    </div>
                                </div>
                                
                                <div className="peeking-icons">
                                    <div className="peek-icon-wrapper gamepad">
                                        <img src={gamepadIcon} alt="Gaming" className="peek-icon" />
                                        <div className="chat-bubble">I'm a gamer!👾</div>
                                    </div>
                                    <div className="peek-icon-wrapper bado">
                                        <img src={badoIcon} alt="Badminton" className="peek-icon" />
                                        <div className="chat-bubble">In my badminton arc!</div>
                                    </div>
                                    <div className="peek-icon-wrapper lol">
                                        <img src={lolIcon} alt="League of Legends" className="peek-icon" />
                                        <div className="chat-bubble">Top 1% in EMEA WildRift 😎</div>
                                    </div>
                                    <div className="peek-icon-wrapper esports">
                                        <img src={esportsIcon} alt="E-Sports" className="peek-icon" />
                                        <div className="chat-bubble">I'm an esports fan!</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About