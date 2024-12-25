import React, { useState, useEffect } from 'react'
import './Navbar.css'

/* TODO: Create light/dark mode toggle*/
/* TODO: Create a download Resume button on Navbar (desktop & mobile) */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'HOME' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'work', label: 'WORK' },
        { id: 'about', label: 'ABOUT' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('#home, #skills, #work, #about');
            const scrollPosition = window.scrollY + window.innerHeight / 8;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY;

            // Check width to handle scrolling based on screen width
            var width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
            if (width > 1440){
                if(element.id === "work") {
                    offsetPosition *= 1;
               }
               else if (element.id === "skills") {
                offsetPosition *= 0.975;
            }
               else if (element.id === "about") {
                   offsetPosition *= 0.975;
               }
            }
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
        <nav className='navbar'>
            <div className='navbar__desktop'>
                <div 
                    className='navbar__brand' 
                    onClick={() => handleNavClick('home')}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='navbar__logo'>MOHAMMED BAJAMAN</span>
                </div>
                
                <div className='navbar__menu'>
                    {navItems.map((item) => (
                        <div 
                            key={item.label}
                            onClick={() => handleNavClick(item.id)}
                            className={`navbar__menu-item ${activeSection === item.id ? 'active' : ''}`}
                            style={{ cursor: 'pointer' }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>

            <div className='navbar__mobile'>
                <button 
                    className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div 
                    className='navbar__brand'
                    onClick={() => handleNavClick('home')}
                    style={{ cursor: 'pointer' }}
                >
                    <span className='navbar__logo'>MB</span>
                </div>

                <div className={`navbar__mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <div 
                            key={item.label}
                            onClick={() => handleNavClick(item.id)}
                            className={`navbar__mobile-item ${activeSection === item.id ? 'active' : ''}`}
                            style={{ cursor: 'pointer' }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </nav>

        {/* Overlay goes here to allow backdrop-filter blur in mobile menu */}
        <div className={`navbar__mobile-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
        ></div>
        </>
    )
}

export default Navbar