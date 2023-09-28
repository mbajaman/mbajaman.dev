import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Mohammed</span> <br />Game Developer</span>
        <p className="introPara">I am a game developer, Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={ bg } alt='Profile' className='bg' />
    </section>
  )
}

export default Intro