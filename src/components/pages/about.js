import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../../../static/assets/images/bio/headshot.png';

import Profile from '../about-info/about-profile';
import Skills from '../about-info/about-skills';
import Projects from '../about-info/about-projects';
import Work from '../about-info/about-work';
import Education from '../about-info/about-education';
import Hobbies from '../about-info/about-hobbies';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition:"center",
                }}
            />
            <div className="right-column">
                <div className='title'>
                    Profile
                </div>
                <br/>
                <div className='one-column'>
                    <Profile />
                </div>
                <br/>
                <div className='title'>
                    Relevant Skills
                </div>
                <br/>
                <div className='two-columns'>
                    <Skills />
                </div>
                <br/>
                <div className='title'>
                    Projects
                </div>
                <br/>
                <div className='one-column'>
                    <Projects />
                </div>
                <div className='title'>
                    Work Experience
                </div>
                <br/>
                <div className='one-column'>
                    <Work />
                </div>
                <div className='title'>
                    Education
                </div>
                <div className='one-column'>
                    <Education />
                </div>
                <div className='title'>
                    Hobbies
                </div>
                <div className='one-column'>
                    <Hobbies />
                </div>
            </div>
        </div>
    )
}