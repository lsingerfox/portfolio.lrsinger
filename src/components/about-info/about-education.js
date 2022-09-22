import React, { Component } from "react";

export default class Education extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="one-column">
                    <ul>
                        <li>
                            <b>Bachelors of Arts</b>, California State University - Monterey Bay, Seaside, CA 93955
                            <br/>
                            2008 - 2013
                            <br/>
                            Major: Integrated Studies Special Major: Culture and Social Action through Creative Writing and Film
                            <br/>
                            Learned about respoecting cultural differences and how social actions affect the current state of the country. Also 
                            expanded knowledge of how to best utilize creative writing skills and how to create a short film from start to 
                            finish.
                        </li>
                        <br/>
                        <li>
                            <b>Full-Stack Certifications</b>, Bottega University, Salt Lake City, UT 84101
                            <br/>
                            2019 - 2022
                            <br/>
                            Was able to expand basic knowledge of HTML style tags {"<b>, <i>, and <u>"} and learn more advanced languages
                            such as ReactJS, SCSS/SASS, JSON, Python 3, and Flask.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}