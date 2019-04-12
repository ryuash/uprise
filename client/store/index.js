import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import postReducer from './postReducer';
import userReducer from './userReducer';
//actions
export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_ALL_USER = 'GET_ALL_USER';


const reducer = combineReducers({
    Post: postReducer,
    User: userReducer
});

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
