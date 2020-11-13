//Imported from libraries
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Imported from own file
import NavigationContainer from './navigation/navigation-container';
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Blog from "./Pages/blog";
import PortfolioDetail from "./Portfolio/portfolio-detail";
import NoMatch from "./Pages/no-match";

export default class App extends Component {
  
  
  render() {
    
    return (
      <div className="container">
        
        <Router>
          <div>

          <NavigationContainer/>

          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/about-me" component ={About} />
            <Route path="/contact-me" component ={Contact} />
            <Route path="/blog" component ={Blog} />
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            <Route component ={NoMatch} />
          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
