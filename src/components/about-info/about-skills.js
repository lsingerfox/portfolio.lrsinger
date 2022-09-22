import React, { Component } from 'react';

export default class Skills extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='one-column'>
                    <ul>
                        <li>Soft Skills:</li>
                        <div className='two-columns'>
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
        )
    }
}