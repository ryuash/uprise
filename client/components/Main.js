import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllPostThunk } from '../store/postReducer';
import { getAllUserThunk } from '../store/userReducer';

import AllPost from './AllPost';

class Main extends React.Component {
    componentDidMount() {
        this.props.getAllPostThunk();
        this.props.getAllUserThunk();
    }
    render() {
        return (
            <Route exact path="/" component={AllPost} />
        );
    }
}

// const mapState = state => {
//     return {
//         allPost: state.Post.allPost,
//         allUser: state.User.allUser
//     };
// };

const mapDispatch = dispatch => {
    return {
        getAllPostThunk: () => dispatch(getAllPostThunk()),
        getAllUserThunk: () => dispatch(getAllUserThunk())
    };
};
export default connect(null, mapDispatch)(Main);
