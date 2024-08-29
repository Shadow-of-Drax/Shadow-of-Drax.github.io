import React from 'react';
import './styles.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hello, I'm [Your Name]</h1>
                <p>A Web Developer passionate about creating beautiful and functional websites.</p>
                <a href="#portfolio" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;