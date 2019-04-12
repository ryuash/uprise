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
        return (
            <React.Fragment>
                <i id="go-back" onClick={() => this.handleGoBack()} className="fas fa-arrow-left" />
                <div id="single-post-container">
                    <div id="single-post-details">
                        <h1>{this.props.singlePost.title}</h1>
                        <p>By : {this.props.singlePost.username} || userId : {this.props.singlePost.userId} || postId : {this.props.singlePost.id}</p>
                        <p>{this.props.singlePost.body}</p>
                    </div>
                </div>
            </React.Fragment>
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
