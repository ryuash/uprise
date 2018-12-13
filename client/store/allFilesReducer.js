import axios from 'axios';
import { GET_ALL_FILES } from './index';
const initialState = [];

//action creator
export const getAllFiles = (allFiles) => ({ type: GET_ALL_FILES, allFiles });
//thunks
export const getAllFilesThunk = () => {
    return async (dispatch) => {
        const { data } = await axios.get('/api/');
        dispatch(getAllFiles(data));
    };
};
//reducer

const allFilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FILES:
            return action.allFiles;
        default:
            return state;
    }
};

export default allFilesReducer;
