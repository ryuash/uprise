import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getAllPostThunk } from '../store/postReducer';
import { getAllUserThunk } from '../store/userReducer';

import AllPost from './AllPost';
import SinglePost from './SinglePost';

class Main extends React.Component {
    componentDidMount() {
        this.props.getAllPostThunk();
        this.props.getAllUserThunk();
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={AllPost} />
                <Route path="/post/:id" component={SinglePost} />
            </Switch>
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
export default withRouter(connect(null, mapDispatch)(Main));
