import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../../../static/assets/images/bio/headshot.jpg';

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
                Welcome! My name is Lynell Singer.
            </div>
        </div>
    )
}