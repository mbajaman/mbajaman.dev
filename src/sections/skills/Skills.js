import React, { useRef } from 'react';
import './Skills.css';

// Import skill card icons


const Skills = () => {
    const skillsGridRef = useRef(null);

    //TODO: Add another skill to make 6 total
    const skillCards = [
        {
            svgName: "code",
            title: "Software Engineering",
            description: "Building scalable and efficient software solutions"
        },
        {
            svgName: "gamepad",
            title: "Game Development",
            description: "Developing engaging gaming experiences"
        },
        {
            svgName: "server",
            title: "IT Solutions",
            description: "Building and securing IT applications"
        },
        {
            svgName: "bot",
            title: "AI Programming",
            description: "Training and deploying AI models"
        },
        {
            svgName: "globe",
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
        <section id="skills" className="section section-tracker">
            <h2 className="section-title">Skills</h2>
            
            <div className="skills-grid" ref={skillsGridRef}>
                {skillCards.map((card, index) => (
                    <div className="skill-card" key={index}>
                            <div 
                                className={`skill-icon ${card.svgName}`}
                            > </div>
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