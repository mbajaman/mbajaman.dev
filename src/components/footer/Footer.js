import React from 'react'
import './Footer.css'

// Import icons
import githubIcon from '../../assets/social-icons/github.svg'
import linkedinIcon from '../../assets/social-icons/linkedin.svg'
import itchIcon from '../../assets/social-icons/itchio.svg'

const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/mbajaman', icon: githubIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mbajaman/', icon: linkedinIcon },
        { name: 'Itch', url: 'https://mbajaman.itch.io/', icon: itchIcon }
    ];

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copyright">
                    © {new Date().getFullYear()} Mohammed Bajaman
                </p>

                <div className="footer__social-links">
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
            </div>
        </footer>
    )
}

export default Footer
