import axios from 'axios';
import { GET_ALL_USER } from './index';

const initialState = {
    allUser: []
};

//action creator
export const getAllUser = allUser => ({ type: GET_ALL_USER, allUser });
//thunks
export const getAllUserThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch(getAllUser(data));
        }
        catch (err) {
            console.error(err);
        }
    };
};
//reducer

const userReducer = (state = initialState, action) => {

    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_USER:
            newState.allUser = action.allUser;
            return newState;
        default:
            return state;
    }

};

export default userReducer;
