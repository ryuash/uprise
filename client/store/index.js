import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//change or delete this reducer later
import allFilesReducer from './allFilesReducer';

//actions
export const GET_ALL_FILES = 'GET_ALL_FILES';

const reducer = combineReducers({
    allFiles: allFilesReducer
});

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
