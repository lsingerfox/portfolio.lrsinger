import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to MidnightVixen's Portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter=this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://lynellsinger.devcamp.space/portfolio/portfolio_items')
      .then (response => {
        console.log(response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      })
      .then(function () {
      });
      }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item ={item}/>;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render () {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
                           
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('art')}>Art</button>
                <button className="btn" onClick={() => this.handleFilter('networking')}>Networking</button>
                <button className="btn" onClick={() => this.handleFilter('music')}>Music</button>
                <button className="btn" onClick={() => this.handleFilter('entertainment')}>Entertainment</button>
                {this.portfolioItems()}
            </div>
        )
    }
}