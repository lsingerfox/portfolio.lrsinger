//Imported from libraries
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

//Imported from own file
import NavigationContainer from './navigation/navigation-container';
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Blog from "./Pages/blog";
import PortfolioManager from "./Pages/portfolio-manager";
import PortfolioDetail from "./Portfolio/portfolio-detail";
import Auth from "./Pages/auth";
import NoMatch from "./Pages/no-match";

library.add(faTrash, faSignOutAlt, faEdit);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", { withCredentials: true })
    .then (response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      // If loggedIn and status LOGGED_IN => return data
      // Else If loggedIn and status NOT_LOGGED_IN => update state
      // Else not loggedIn and status LOGGED_IN => update state
      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState ({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState ({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    })
    .catch(error => {
      console.log("Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedRoutes () {
    return [
      <Route key="portfolio-manager" path="/portfolio-manager" component ={PortfolioManager} />
    ];
  }
  
  render() {
    
    return (
      <div className="container">
        
        <Router>
          <div>

          <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout} />

          <Switch>
            <Route exact path="/" component ={Home} />

            <Route path="/auth" render={props => (
              <Auth 
                {...props}
                handleSuccessfulLogin = {this.handleSuccessfulLogin}
                handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}
              />
            )} />
            
            <Route path="/about-me" component ={About} />
            <Route path="/contact-me" component ={Contact} />
            <Route path="/blog" component ={Blog} />
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizedRoutes()) : null }
            <Route component ={NoMatch} />
          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
