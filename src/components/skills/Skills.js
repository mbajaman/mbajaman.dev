import React, { useRef } from 'react';
import './Skills.css';

// Import skill card icons
import uiIcon from '../../assets/skill-icons/code.svg';
import gameIcon from '../../assets/skill-icons/gamepad.svg';
import backendIcon from '../../assets/skill-icons/server.svg';
import aiIcon from '../../assets/skill-icons/bot.svg';
import webIcon from '../../assets/skill-icons/globe.svg';

const Skills = () => {
    const skillsGridRef = useRef(null);

    const skillCards = [
        {
            icon: uiIcon,
            title: "Software Engineering",
            description: "Building scalable and efficient software solutions"
        },
        {
            icon: gameIcon,
            title: "Game Development",
            description: "Developing engaging gaming experiences"
        },
        {
            icon: backendIcon,
            title: "IT Solutions",
            description: "Building and securing IT applications"
        },
        {
            icon: aiIcon,
            title: "AI Programming",
            description: "Training and deploying AI models"
        },
        {
            icon: webIcon,
            title: "Web Development",
            description: "Crafting modern and responsive web applications"
        },
    ];

    const scroll = (direction) => {
        if (skillsGridRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            skillsGridRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="skills" className="skills-section section-tracker">
            <h2 className="section-title">Skills</h2>
            
            <div className="skills-grid" ref={skillsGridRef}>
                {skillCards.map((card, index) => (
                    <div className="skill-card" key={index}>
                        <img 
                            src={card.icon} 
                            alt={card.title}
                            className="skill-icon"
                        />
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div className="scroll-controls">
                <button 
                    className="scroll-arrow left" 
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    ←
                </button>
                <button 
                    className="scroll-arrow right" 
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default Skills; 