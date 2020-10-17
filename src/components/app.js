//Imported from libraries
import React, { Component } from 'react';
import moment from "moment";

//Imported from own file
import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Lynell Singer</h1>
        <h2>React Portfolio</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
