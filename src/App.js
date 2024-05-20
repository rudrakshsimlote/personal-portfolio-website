// src/App.js
import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Rudraksh Simlote</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <footer>
                <p>&copy; 2024 Rudraksh Simlote</p>
            </footer>
        </div>
    );
}

export default App;
