import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
        // Data that we'll need:
        // - Background Image: thumb_image_url
        // - Logo: logo_url
        // - Description: description
        // - ID: id

        const { id, description, thumb_image_url, logo_url} = props.item;
    return(
        <div className="portfolio-item-wrapper">
        <img src={thumb_image_url} />
        <img src={logo_url} />
        <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}