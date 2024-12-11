import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/navbar/Navbar'
import About from '../about/About'
import Work from '../work/Work'
import Footer from '../../components/footer/Footer'
import './Home.css'

// Import GIF Illustration
import workGif from './work.gif'

// Import social icons
import githubIcon from '../../assets/social-icons/github.svg'
import linkedinIcon from '../../assets/social-icons/linkedin.svg'
import itchIcon from '../../assets/social-icons/itchio.svg'

// Import Skills component
import Skills from '../../components/skills/Skills'

const Home = () => {
    const roles = [
        'Software Engineer',
        2000,
        'Game Programmer',
        2000,
        'IT Solutions Analyst',
        2000,
        'Unity Developer',
        2000,
        'UE5 Developer',
        2000,
        'AI Programmer',
        2000
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/mbajaman', icon: githubIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mbajaman/', icon: linkedinIcon },
        { name: 'Itch', url: 'https://mbajaman.itch.io/', icon: itchIcon }
    ];

    // TODO: Delete this section when done testing
    // ##### Commented out time-line indicator #####
    // const [activeSection, setActiveSection] = useState(0);

    // Add scroll event listener to track sections
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll('.section-tracker');
    //         const scrollPosition = window.scrollY + window.innerHeight / 2;

    //         sections.forEach((section, index) => {
    //             const sectionTop = section.offsetTop;
    //             const sectionBottom = sectionTop + section.offsetHeight;

    //             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    //                 setActiveSection(index);
    //             }
    //         });
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div id="home" className="home-container">
            <Navbar />
            
            <main className="home-content">
                <div className="hero-section section-tracker">
                    <div className="hero-social-links-vertical">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img src={link.icon} alt={link.name} />
                            </a>
                        ))}
                    </div>
                    <div className="hero-text">
                        <h1>
                            Hello, I'm
                            <span className="highlight"> Mohammed</span>
                        </h1>
                        <h2>
                            a <span className="typewriter">
                                <TypeAnimation
                                    sequence={roles}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>
                        </h2>
                        <p className="subtitle">
                            Passionate about creating elegant solutions through code. 
                            Specializing in software engineering, game development, and IT solutions.
                        </p>
                        <div className="hero-actions">
                            <div className="cta-buttons">
                                <div 
                                    onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                                    className="primary-button"
                                    style={{ cursor: 'pointer' }}
                                >
                                    View My Work
                                </div>
                                <Link to="https://www.linkedin.com/in/mbajaman/" className="secondary-button">
                                <img src={linkedinIcon} alt="LinkedIn" className='button-icon'/>
                                Let's Connect
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={workGif} alt="Developer working" />
                    </div>
                </div>

                <Skills />
                {/* TODO: Delete this section when done testing */}
                { /* ##### Commented out time-line indicator ##### */ }
                {/* <div className="timeline-indicator">
                    {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className={`dot ${activeSection === index ? 'active' : ''}`}
                            onClick={() => {
                                const sections = document.querySelectorAll('.section-tracker');
                                sections[index].scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    ))}
                </div> */}
            </main>
            <Work />
            <About />
            <Footer />
        </div>
    )
}

export default Home