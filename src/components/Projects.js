// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Codestorm Internship Tracker</h3>
                    <p><strong>Technologies:</strong> MongoDB, Express.js, React, Node.js</p>
                    <p><strong>Duration:</strong> March 2024 - Present</p>
                    <ul>
                        <li>Planned and developed a web application with a team of 3 to track internship applications, improving application tracking efficiency by 40% by centralizing all applications on one page.</li>
                        <li>Enhanced resume compatibility by 30% using AI models like OpenAI to adjust resumes based on job descriptions.</li>
                        <li>Increased user engagement by 25% by developing a Chrome extension to integrate with job boards like LinkedIn.</li>
                    </ul>
                </li>
                <li>
                    <h3>Codenames Game Project</h3>
                    <p><strong>Technologies:</strong> React (TypeScript), Node.js, Firebase Realtime Database, CSS</p>
                    <p><strong>Duration:</strong> December 2023 - Present</p>
                    <ul>
                        <li>Created an interactive, multiplayer online version of the Codenames board game, increasing accessibility for remote play by 50%.</li>
                        <li>Improved user experience by designing and implementing a responsive interface using React with TypeScript.</li>
                        <li>Enhanced real-time gameplay by 40% through the integration of Firebase Realtime Database for live game data management.</li>
                    </ul>
                </li>
                <li>
                    <h3>Matrimonial Application</h3>
                    <p><strong>Technologies:</strong> Angular, Node.JS, React, PostgreSQL, Flutter</p>
                    <p><strong>Duration:</strong> May 2021 - August 2021</p>
                    <ul>
                        <li>Developed a full-stack web application for matching individuals, resulting in a 30% increase in successful matches within the local community.</li>
                        <li>Implemented a PostgreSQL database to store user biodata, improving data retrieval efficiency by 20%.</li>
                        <li>Designed a user-friendly interface with Flutter and React, increasing user engagement by 15%.</li>
                    </ul>
                </li>
                <li>
                    <h3>Personal Portfolio Website</h3>
                    <p><strong>Technologies:</strong> ReactJS, HTML, CSS</p>
                    <p><strong>Duration:</strong> June 2020 - Present</p>
                    <ul>
                        <li>Developed and maintained a personal website to showcase projects, increasing online visibility by 50%.</li>
                        <li>Utilized HTML, CSS, and JavaScript to create an engaging user interface, resulting in a 25% increase in user interaction.</li>
                        <li>Demonstrated project impact through detailed case studies, enhancing professional portfolio presentation.</li>
                    </ul>
                </li>
                <li>
                    <h3>Discord Commands/Reactions Bot</h3>
                    <p><strong>Technologies:</strong> JavaScript, JSON</p>
                    <p><strong>Duration:</strong> July 2020 - August 2020</p>
                    <ul>
                        <li>Designed and deployed a feature-rich Discord bot, improving server functionality by 35%.</li>
                        <li>Enabled customizable features including moderation, entertainment, and utility, increasing user satisfaction by 20%.</li>
                        <li>Streamlined server management, reducing administrative tasks by 30% through automation.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Projects;
