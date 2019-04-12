import axios from 'axios';
import { GET_ALL_POST, GET_SINGLE_POST } from './index';
const initialState = {
    allPost: [],
    singlePost: {}
};

//action creator
export const getAllPost = allPost => ({ type: GET_ALL_POST, allPost });
export const getSinglePost = post => ({ type: GET_SINGLE_POST, post });

//thunks
export const getAllPostThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            const limitData = data.slice(0, 50);
            dispatch(getAllPost(limitData));
        }
        catch (err) {
            console.error(err);
        }
    };
};

export const getSinglePostThunk = (id) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
            data.username = user.data.username;
            return dispatch(getSinglePost(data));
        }
        catch (err) {
            console.error(err);
        }
    };
};
//reducer

const PostReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_POST:
            newState.allPost = action.allPost;
            return newState;
        case GET_SINGLE_POST:
            newState.singlePost = action.post;
            return newState;
        default:
            return state;
    }
};

export default PostReducer;
