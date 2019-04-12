import axios from 'axios';
import { GET_ALL_POST } from './index';
const initialState = {
    allPost: []
};

//action creator
export const getAllPost = allPost => ({ type: GET_ALL_POST, allPost });
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
//reducer

const PostReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_POST:
            newState.allPost = action.allPost;
            return newState;
        default:
            return state;
    }
};

export default PostReducer;
