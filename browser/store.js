import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';

//Action Types

//Action Creators

//Intitial State
const initialState = {
	students: [],
	selectedStudent: {},
	showStudent: false
};

//Reducer
const reducer = (state, action) => {
	// switch (action.type) {
	//     case
	// }
	// default: return state
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
