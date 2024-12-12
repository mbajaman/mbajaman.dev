import React from 'react'
import Project from '@components/project/Project'
import '@styles/global.css';
import './Work.css'

const Work = () => {
    return (
        <section id="work" className="section section-tracker">           
            <h2 className="section-title">My Projects</h2>
            <Project />
        </section>
    )
}

export default Work
