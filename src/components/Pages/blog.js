import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BlogItem from "../Blog/blog-item";

class Blog extends Component {
    constructor () {
        super();

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
        this.activateInfiniteScroll();    
    }

    activateInfiniteScroll() {
        window.onscroll = () => {

            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                console.log("get more posts")
            }
        };
    }

    getBlogItems() {
        axios.get("https://lynellsinger.devcamp.space/portfolio/portfolio_blogs", {withCredentials: true} 
        ).then (response => {
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch (error => {
            console.log("getBlogItems error", error);
        })
    }

    componentDidMount() {
        this.getBlogItems();
    }

    render () {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        })
        return (
            <div className="blog-container">
                <div className="content-container">
                    {blogRecords}
                </div>
            </div>
        )
    }
}

export default Blog;