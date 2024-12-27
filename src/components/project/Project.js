import React, { useState } from 'react'
import './Project.css'
import projectsData from '@data/projects.json'
import ProjectModal from '@components/modal/ProjectModal'

const Project = () => {
    const { projects } = projectsData
    const [selectedProject, setSelectedProject] = useState(null)
    
    // Function to get image URL dynamically
    const getImageUrl = (imagePath) => {
        try {
            return require(`../../${imagePath}`)
        } catch (err) {
            return 'https://placehold.co/600x400/png'
        }
    }

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <div className="project">
            <div className="project__content">
                {projects.map((project) => (
                    <div 
                        className="project-card"
                        key={project.name}
                    >
                        <div className="project-card__inner">
                            <div className="project-card__image">
                                <img 
                                    src={project.images[0] ? getImageUrl(project.images[0]) : 'https://placehold.co/600x400/png'}
                                    alt={project.name}
                                />
                            </div>

                            <h3 className="project-card__title">{project.name}</h3>
                            <div className="project-card__tags--static">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-card__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="project-card__overlay">
                                <div className="project-card__tags--overlay">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-card__tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="project-card__description">{project.description}</p>
                                <a 
                                    href={project.link}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        openModal(project)
                                    }}
                                    className="project-card__link"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default Project
