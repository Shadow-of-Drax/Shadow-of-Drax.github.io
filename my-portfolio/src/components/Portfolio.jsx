import React from 'react';
import '../styles.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-container">
                <div className="portfolio-item">
                    <img src="project1.jpg" alt="Project 1" />
                    <h3>Project Title 1</h3>
                    <p>Short description of the project.</p>
                </div>
                <div className="portfolio-item">
                    <img src="project2.jpg" alt="Project 2" />
                    <h3>Project Title 2</h3>
                    <p>Short description of the project.</p>
                </div>
                <div className="portfolio-item">
                    <img src="project3.jpg" alt="Project 3" />
                    <h3>Project Title 3</h3>
                    <p>Short description of the project.</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;