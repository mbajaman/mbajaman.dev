import React, { useState } from 'react'
import './Project.css'
import projectsData from '@data/projects.json'
import ProjectModal from '@components/modal/ProjectModal'

const Project = () => {
    const { projects } = projectsData
    // TODO: Decide if we want to filter projects by tags
    // const [selectedTag, setSelectedTag] = useState('all')
    // const [filteredProjects, setFilteredProjects] = useState(projects)
    const [selectedProject, setSelectedProject] = useState(null)
    
    // Function to get image URL dynamically
    const getImageUrl = (imagePath) => {
        try {
            return require(`../../${imagePath}`)
        } catch (err) {
            return 'https://placehold.co/600x400/png'
        }
    }

    // // Separate programming languages from other tags
    // const programmingTags = ['C#', 'C++', 'Python', 'JavaScript']
    // const otherTags = ['UE5', 'Unity', 'Procedural Generation', 'AI', 'Storytelling', 'Level Design', 'Shaders']
    
    // // Get unique tags from all projects, separated by category
    // const allProgrammingTags = ['all', ...new Set(projects.flatMap(project => 
    //     project.tags.filter(tag => programmingTags.includes(tag))
    // ))]
    // const allOtherTags = [...new Set(projects.flatMap(project => 
    //     project.tags.filter(tag => otherTags.includes(tag))
    // ))]

    // useEffect(() => {
    //     if (selectedTag === 'all') {
    //         setFilteredProjects(projects)
    //     } else {
    //         const filtered = projects.filter(project => 
    //             project.tags.includes(selectedTag)
    //         )
    //         setFilteredProjects(filtered)
    //     }
    // }, [selectedTag, projects])

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <div className="project">
            {/* <div className="project__filter">
                <div className="filter-section">
                    <span className="filter-label">Technologies</span>
                    <div className="filter-tags">
                        {allProgrammingTags.map((tag) => (
                            <button
                                key={tag}
                                className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                
                {allOtherTags.length > 0 && (
                    <>
                        <div className="filter-divider">
                            <span></span>
                        </div>

                        <div className="filter-section">
                            <span className="filter-label">Categories</span>
                            <div className="filter-tags">
                                {allOtherTags.map((tag) => (
                                    <button
                                        key={tag}
                                        className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                                        onClick={() => setSelectedTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
             */}
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
                            <div className="project-card__tags project-card__tags--static">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-card__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="project-card__overlay">
                                <div className="project-card__tags project-card__tags--overlay">
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
