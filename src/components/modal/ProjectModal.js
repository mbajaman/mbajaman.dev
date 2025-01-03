import React, { useState, useEffect, useMemo } from 'react';
import './ProjectModal.css';

// Import icons
import itchIcon from '@assets/social-icons/itchio.svg';
import githubIcon from '@assets/social-icons/github.svg';
import youtubeIcon from '@assets/social-icons/youtube.svg';
import webIcon from '@assets/social-icons/web.svg';
import pdfIcon from '@assets/social-icons/pdf.svg';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);
    
    // Function to get image URL dynamically
    const getImageUrl = (imagePath) => {
        try {
            return require(`../../${imagePath}`)
        } catch (err) {
            return 'https://placehold.co/600x400/png'
        }
    }

    // Get all image URLs
    const images = useMemo(() => {
        return project.images?.map(path => getImageUrl(path)) || [];
    }, [project.images]);

    // Preload images when modal opens
    useEffect(() => {
        if (isOpen) {
            const preloadImages = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        setLoadedImages(prev => [...prev, src]);
                        resolve(src);
                    };
                    img.onerror = reject;
                });
            });

            Promise.all(preloadImages)
                .catch(error => console.error('Error preloading images:', error));
        } else {
            // Clear loaded images when modal closes
            setLoadedImages([]);
        }
    }, [isOpen, images]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Require PDF using path in projects.json
    const getPdfUrl = (pdfPath) => {
        try {
            return require(`../../${pdfPath}`);
        } catch (err) {
            console.error('Error loading PDF:', err);
            return null;
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <div className="modal-icon"></div>
                </button>   
                <div className="modal-gallery">
                    {/* Image container with loading state */}
                    <div className="modal-image-container">
                        {images.map((src, index) => (
                            <img
                                key={src}
                                src={src}
                                alt={`${project.name} ${index + 1}`}
                                className={`modal-image ${index === currentImageIndex ? 'active' : ''}`}
                                style={{ 
                                    opacity: loadedImages.includes(src) ? 1 : 0,
                                    display: index === currentImageIndex ? 'block' : 'none'
                                }}
                            />
                        ))}
                        {!loadedImages.includes(images[currentImageIndex]) && (
                            <div className="modal-image-loader">Loading...</div>
                        )}
                    </div>
                    
                    <button 
                        className={`gallery-nav prev ${project.images.length > 1 ? '' : 'single'}`}
                        onClick={prevImage}
                        aria-label="Previous image"
                    >
                        &lt;
                    </button>

                    <button 
                        className={`gallery-nav next ${project.images.length > 1 ? '' : 'single'}`} 
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        &gt;
                    </button>
                    
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="modal-details">
                    <h2>{project.name}</h2>
                    
                    <div className="modal-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="modal-tag">{tag}</span>
                        ))}
                    </div>

                    <div className="modal-description">
                        <h3>Overview</h3>
                        <p>{project.description}</p>
                        
                        <h3>Details</h3>
                        <ul>
                            {project.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-links">
                        {project.itchLink && (
                            <a 
                                href={project.itchLink} 
                                className="modal-button secondary-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="modal-button-icon" src={itchIcon} alt="itch.io" />
                                itch.io
                            </a>
                        )}
                        {project.githubLink && (
                            <a 
                                href={project.githubLink} 
                                className="modal-button secondary-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="modal-button-icon" src={githubIcon} alt="GitHub" />
                                GitHub
                            </a>
                        )}
                        {project.youtubeLink && (
                            <a 
                                href={project.youtubeLink} 
                                className="modal-button secondary-button"
                                target="_blank"
                                rel="noopener noreferrer"
                        >
                            <img className="modal-button-icon" src={youtubeIcon} alt="YouTube" />
                            YouTube
                        </a>
                        )}
                        {project.webLink && (
                            <a 
                                href={project.webLink} 
                                className="modal-button secondary-button"
                                target="_blank"
                                rel="noopener noreferrer"
                        >
                            <img className="modal-button-icon" src={webIcon} alt="YouTube" />
                            Website
                        </a>
                        )}
                        {project.pdfLink && (
                            <a 
                                href={getPdfUrl(project.pdfLink)} 
                                className="modal-button secondary-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="modal-button-icon" src={pdfIcon} alt="PDF" />
                                PDF
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 