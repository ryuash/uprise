import React from 'react';
import { connect } from 'react-redux';


const AllPost = props => {
    console.log(props.allPost, 'all post');
    return (
        <h1>hit all post</h1>
    );
};

const mapState = state => {
    return {
        allPost: state.Post.allPost,
        allUser: state.Post.allUser
    };
};
export default connect(mapState)(AllPost);
