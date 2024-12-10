import React from 'react'
import Project from '../../components/project/Project'
import './Work.css'

const Work = () => {
    return (
        <div id="work" className="work-container section-tracker">           
            <section className="work-content">
                <h2 className="section-title">My Projects</h2>
                <Project />
            </section>
        </div>
    )
}

export default Work
