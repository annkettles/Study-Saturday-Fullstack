import axios from 'axios';

//Action Type
const SET_STUDENTS = 'SET_STUDENTS';

//Action Creator
const setAllStudents = (students) => ({
	type: SET_STUDENTS,
	students
});

//THUNKS

export const fetchStudents = () => async (dispatch) => {
	try {
		const {data} = await axios.get('/student');
		dispatch(setAllStudents(data));
	} catch (err) {
		console.error(err);
	}
};

//Initial State
const students = [];

//Sub-Reducer

const studentReducer = (state = students, action) => {
	switch (action.type) {
		case SET_STUDENTS:
			return action.students;
		default:
			return state;
	}
};

export default studentReducer;
