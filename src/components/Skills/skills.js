import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled developer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ratione iste exercitationem mollitia dolorem culpa expedita quia iusto cupiditate eligendi sed magnam, 
        possimus fuga sequi blanditiis? Voluptas iure quam officia ut.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt='UIDesign' className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is demo text, write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt='WebDesign' className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is demo text, write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt='AppDesign' className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo text, write your own content here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills