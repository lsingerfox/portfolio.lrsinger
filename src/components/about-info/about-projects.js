import React, { Component } from "react";

export default class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="one-column">
                <ul>
                    <li><b>Personal Profile Site:</b> A profile website created at Boteega University. It highlights some talents and includes a creative writing blog.</li>
                    <div className="two-columns">
                        <li>
                            <b>Link:</b> <a href="https://lrs-bottega-react-portfolio.herokuapp.com/">Click Here to View</a>
                        </li>
                    </div>
                    <li><b>Jump 4 Joy Montana Distributing, LLC:</b> the Jump 4 Joy Montana Distributing, LLC website was created for a friend who is currently selling Dippin' dots in Montana and Idaho and was the main focus for the coding development capstone for Bottega University.</li>
                    <div className="two-columns">
                        <li>
                            <b>Link:</b> <a href="https://jump4joy-mt-dist.herokuapp.com/" target={"_blank"}>Click Here to View</a>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}