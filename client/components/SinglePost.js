import React from 'react';
import { connect } from 'react-redux';
import { getSinglePostThunk } from '../store/postReducer';

class SinglePost extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getSinglePostThunk(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getSinglePostThunk(this.props.match.params.id);
        }
    }

    render() {
        console.log(this.props, 'props');
        return (
            <h1>hit that single post</h1>
        );
    }
}

const mapState = state => {
    return {
        singlePost: state.Post.singlePost
    };
};

const mapDispatch = dispatch => {
    return {
        getSinglePostThunk: (id) => dispatch(getSinglePostThunk(id))
    };
};

export default connect(mapState, mapDispatch)(SinglePost);
