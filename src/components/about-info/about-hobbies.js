import React, { Component } from "react";

export default class Hobbies extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="one-column">
                    <ul>
                        <li>Writing</li>
                        <li>Karaoke/Singing</li>
                        <li>Playing PC and Console games</li>
                        <li>Reading</li>
                    </ul>
                </div>
            </div>
        )
    }
}