import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../../../static/assets/images/bio/headshot.png';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition:"center"
                }}
            />
            <div className="right-column">
                <div className='title'>
                    Profile
                </div>
                <div className='profile'>
                    A driven Front-End Web Developer interested in applying critical thinking and problem-solving skills to a work 
                    environment that challenges growth in coding languages and creative skills. The experience presented shows an 
                    ability to manage time between multiple tasks and multiple opportunities to raise diversity and disability 
                    awareness. Additionally, the education provided shows a diverse array of subjects learned.
                </div>
                <div className='title'>
                    Relevant Skills
                </div>
                <div className='one-column'>
                    <ul>
                        <li>Soft Skills:</li>
                        <div className='two-colums'>
                            <li>Critical thinking</li>
                            <li>Willingness to learn</li>
                            <li>Self-Leadership</li>
                            <li>Self-Assessment</li>
                            <li>Friendliness</li>
                            <li>Empathy</li>
                            <li>Problem-Solving</li>
                            <li>Time Management</li>
                            <li>Artistic Sense</li>
                            <li>Business Etiquette</li>
                            <li>Diversity Awareness</li>
                            <li>Disability Awareness</li>
                            <li>Customer Service</li>
                            <li>Ability to work in a team</li>
                        </div>
                    </ul>
                </div>
                <div className='one-column'>
                    <ul>
                        <li>Technical Skills:</li>
                        <div className='two-columns'>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Python 3</li>
                            <li>UML</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Flask</li>
                            <li>JSON</li>
                            <li>Git</li>
                            <li>MongoDB</li>
                            <li>SQL Databases</li>
                            <li>SCSS/SASS</li>
                            <li>Flexbox</li>
                            <li>CSS Grid</li>
                        </div> 
                    </ul>
                </div>
            </div>
        </div>
    )
}