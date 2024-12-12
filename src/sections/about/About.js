import React from 'react'
import '../../styles/global.css';
import './About.css'

// Import selfie 📱
import placeholderImage from '../../assets/profile.jpg'

// Import info icons
import gamepadIcon from '../../assets/about-icons/gamepad.svg'
import badoIcon from '../../assets/about-icons/bado.svg'
import lolIcon from '../../assets/about-icons/wr_lol.png'
import travelIcon from '../../assets/about-icons/travel.svg'
import esportsIcon from '../../assets/about-icons/esports.svg'

// Import flags
import usaFlag from '../../assets/flag-icons/flag_us.svg';
import netherlandsFlag from '../../assets/flag-icons/flag_nl.svg';
import belgiumFlag from '../../assets/flag-icons/flag_be.svg';
import saudiFlag from '../../assets/flag-icons/flag_sa.svg';
import indiaFlag from '../../assets/flag-icons/flag_in.svg';
import uaeFlag from '../../assets/flag-icons/flag_ae.svg';

const About = () => {
    return (
        <section id="about" className="about-section section-tracker">
            <div className="about-image">
                <img src={placeholderImage} alt="Mohammed Bajaman" />
                <div className="image-overlay"></div>
            </div>
            
            <div className="about-text">
                <h1 className="section-title">About Me</h1>
                <p className="about-subtitle">Software Engineer | Game Developer | IT Expert</p>
                
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
                            <div className="peek-icon-wrapper travel">
                                <img src={travelIcon} alt="Travel" className="peek-icon" />
                                <div className="chat-bubble">2023
                                    <img src={usaFlag} alt="USA" className="flag-icon" />
                                    <img src={netherlandsFlag} alt="Netherlands" className="flag-icon" />
                                    <img src={belgiumFlag} alt="Belgium" className="flag-icon" />
                                    <img src={saudiFlag} alt="Saudi Arabia" className="flag-icon" />
                                    <img src={indiaFlag} alt="India" className="flag-icon" />
                                    <img src={uaeFlag} alt="UAE" className="flag-icon" />
                                </div>
                            </div>
                            <div className="peek-icon-wrapper esports">
                                <img src={esportsIcon} alt="E-Sports" className="peek-icon" />
                                <div className="chat-bubble">I'm an esports fan!</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
