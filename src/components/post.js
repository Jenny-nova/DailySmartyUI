import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        // Verificamos que exista associated_topics
        if (!this.props.associated_topics) return null;

        return this.props.associated_topics.map((topic, index) => (
            <span className="post-topic" key={index}>{topic}</span>
        ));
    }

    render() {
        return (
            <li className="recent-post">
                <div className="recent-post__title">
                    {this.props.title || 'Sin título'}
                </div>
                <div className="recent-post__topics">
                    {this.renderTopics()}
                </div>
            </li>
        );
    }
}

export default Post;