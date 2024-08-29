import React from 'react';
import './styles.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    <h3>HTML & CSS</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>JavaScript</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>React</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                </div>
                {/* Add more skills as needed */}
            </div>
        </section>
    );
};

export default Skills;