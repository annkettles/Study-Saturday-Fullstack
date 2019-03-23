import {createStore, applyMiddleware, combineReducers} from 'redux';
import studentReducer from './students';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
	students: studentReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));

export default store;
