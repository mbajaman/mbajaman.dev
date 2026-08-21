import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { profileList } from '@config/profiles'
import { useProfile } from '@context/ProfileContext'

/* TODO: Create light/dark mode toggle*/
/* TODO: Create a download Resume button on Navbar (desktop & mobile) */
const Navbar = () => {
    const { profileId, profile } = useProfile()
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const profileRef = useRef(null)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'HOME' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'work', label: 'WORK' },
        { id: 'about', label: 'ABOUT' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(
                '#home, #skills, #work, #about'
            )
            const scrollPosition = window.scrollY + window.innerHeight / 8

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionBottom = sectionTop + section.offsetHeight

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    setActiveSection(section.id)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!isProfileOpen) return

        const handlePointerDown = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false)
            }
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsProfileOpen(false)
        }

        document.addEventListener('mousedown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('mousedown', handlePointerDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isProfileOpen])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // Each profile renders a different project set, so keep the incoming
    // view at the top rather than inheriting the previous scroll offset.
    const handleProfileSelect = () => {
        setIsProfileOpen(false)
        setIsMenuOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNavClick = (id) => {
        setIsMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            const elementPosition = element.getBoundingClientRect().top
            var offsetPosition = elementPosition + window.scrollY

            // Check width to handle scrolling based on screen width
            var width =
                window.innerWidth > 0 ? window.innerWidth : window.screen.width
            if (width > 1440) {
                if (element.id === 'work') {
                    offsetPosition *= 1
                } else if (element.id === 'skills') {
                    offsetPosition *= 0.975
                } else if (element.id === 'about') {
                    offsetPosition *= 0.975
                }
            }
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar__desktop">
                    <div
                        className="navbar__brand"
                        onClick={() => handleNavClick('home')}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="navbar__logo">MOHAMMED BAJAMAN</span>
                    </div>

                    <div className="navbar__desktop-right">
                        <div className="navbar__menu">
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

                        <div className="navbar__profile" ref={profileRef}>
                            <button
                                className="navbar__profile-trigger"
                                onClick={() =>
                                    setIsProfileOpen((open) => !open)
                                }
                                aria-expanded={isProfileOpen}
                                aria-haspopup="true"
                                aria-label={`Viewing as ${profile.label}. Change profile`}
                            >
                                {profile.label}
                                <span
                                    className={`navbar__profile-caret ${isProfileOpen ? 'open' : ''}`}
                                />
                            </button>
                            <div
                                className={`navbar__profile-menu ${isProfileOpen ? 'active' : ''}`}
                            >
                                <span className="navbar__profile-heading">
                                    Viewing As
                                </span>
                                {profileList.map((option) => (
                                    <Link
                                        key={option.id}
                                        to={`/${option.id}`}
                                        className={`navbar__profile-option ${option.id === profileId ? 'active' : ''}`}
                                        onClick={handleProfileSelect}
                                    >
                                        {option.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar__mobile">
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
                        className="navbar__brand"
                        onClick={() => handleNavClick('home')}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="navbar__logo">MB</span>
                    </div>

                    <div
                        className={`navbar__mobile-menu ${isMenuOpen ? 'active' : ''}`}
                    >
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

                        <div className="navbar__mobile-profiles">
                            <span className="navbar__profile-heading">
                                VIEWING AS
                            </span>
                            <div className="navbar__mobile-profiles-options">
                                {profileList.map((option) => (
                                    <Link
                                        key={option.id}
                                        to={`/${option.id}`}
                                        className={`navbar__profile-option ${option.id === profileId ? 'active' : ''}`}
                                        onClick={handleProfileSelect}
                                    >
                                        {option.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay goes here to allow backdrop-filter blur in mobile menu */}
            <div
                className={`navbar__mobile-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>
        </>
    )
}

export default Navbar
