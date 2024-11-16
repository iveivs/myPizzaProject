

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer from './reducers/user-reducer';

const reducer = combineReducers({
    users: userReducer,
});

export const store =  createStore(reducer)