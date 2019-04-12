import React from 'react';
import { connect } from 'react-redux';
import { getSinglePostThunk } from '../store/postReducer';

class SinglePost extends React.Component {
    constructor() {
        super();
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack() {
        console.log('hit go back');
        this.props.history.goBack();
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
            <div>
                <h3 onClick={() => this.handleGoBack()}>go back</h3>
                <h1>{this.props.singlePost.title}</h1>
                <p>By {this.props.singlePost.username}</p>
                <p>{this.props.singlePost.id}</p>
                <p>{this.props.singlePost.body}</p>
            </div>
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
