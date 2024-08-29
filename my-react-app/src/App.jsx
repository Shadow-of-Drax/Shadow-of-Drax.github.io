import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Portfolio />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
