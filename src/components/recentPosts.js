import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Post from './post';

class RecentPosts extends Component {
    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = () => {
        // Tomamos solo los 3 primeros posts y renderizamos el componente Post
        return this.props.recentPosts.slice(0, 3).map((post, index) => (
            <Post {...post} key={index} />
        ));
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

// Función para mapear el estado a props
function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    };
}

// Conectamos el componente al store
export default connect(mapStateToProps, actions)(RecentPosts);