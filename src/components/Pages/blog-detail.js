import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";

import BlogFeaturedImage from '../Blog/blog-featured-image';
import BlogForm from '../Blog/blog-form';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBlogId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
    }

    handleUpdateFormSubmission(blog) {
        this.setState ({
            blogItem: blog,
            editMode: false
        });
    }

    handleFeaturedImageDelete() {
        this.setState ({
            blogItem: {
                featured_image_url: ""
            }
        })
    }

    handleEditClick() {
        this.setState({ editMode: true });
    }

    getBlogItem() {
        axios.get(`https://lynellsinger.devcamp.space/portfolio/portfolio_blogs/${this.state.currentBlogId}`)
        .then(response => {
            this.setState ({
                blogItem: response.data.portfolio_blog
            })
        }).catch(error => {
            console.log("getBlogItem error", error)
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;

        const contentManager = () => {
            if (this.state.editMode) {
                return (
                    <BlogForm 
                        handleFeaturedImageDelete={this.handleFeaturedImageDelete} 
                        handleUpdateFormSubmission={this.handleUpdateFormSubmission}
                        editMode={this.state.editMode} 
                        blog={this.state.blogItem} 
                    />
                );
            } else {
                return (
                    <div className="content-container">
                        <h1 onClick={this.handleEditClick}>{title}</h1>

                        <BlogFeaturedImage img={featured_image_url} />

                        <div className="content">
                            { ReactHtmlParser(content) }
                        </div>
                    </div>
                )
            }
        }
        
        return <div className="blog-container"> {contentManager()} </div>;
    }
}