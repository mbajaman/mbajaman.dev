import React from 'react'

// Import components
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'

// Import sections
import Hero from '@sections/hero/Hero'
import Skills from '@sections/skills/Skills'
import Work from '@sections/work/Work'
import About from '@sections/about/About'

import './Home.css'


const Home = () => {
    return (
        <div id="home" className="home-container">
            <Navbar />
            <Hero />
            <Skills />
            <Work />
            <About />
            <Footer />
        </div>
    )
}

export default Home