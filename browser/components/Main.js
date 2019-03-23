import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm.js';
import {fetchStudents} from '../store/students';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStudent: {},
			showStudent: false
		};

		this.selectStudent = this.selectStudent.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addStudent = this.addStudent.bind(this);
	}

	componentDidMount() {
		this.props.getStudents();
	}

	// async getStudents() {
	// 	console.log('fetching');
	// 	try {
	// 		const {data} = await axios.get('/student');
	// 		this.setState({students: data});
	// 		console.log('THis is the State', this.state);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// }

	selectStudent(student) {
		return this.setState({
			selectedStudent: student
		});
	}

	async addStudent(student) {
		const {data} = await axios.post('/student', student);
		this.setState({
			students: [ ...this.state.students, data ],
			showStudent: false
		});
	}

	handleClick(e) {
		return this.setState({
			showStudent: !this.state.showStudent
		});
	}

	render() {
		console.log('this is the state in main', this.state);
		return (
			<div>
				<h1>Students</h1>
				<button onClick={this.handleClick}>Add Student</button>
				{this.state.showStudent ? <NewStudentForm addStudent={this.addStudent} /> : null}
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Tests</th>
						</tr>
					</thead>
					<StudentList students={this.props.students} selectStudent={this.selectStudent} />
				</table>
				{this.state.selectedStudent.id ? <SingleStudent student={this.state.selectedStudent} /> : null}
			</div>
		);
	}
}

//puts state on props (this.props.students is the state)
const mapStateToProps = (state) => ({
	students: state.students
});

//puts dispatch on props (this.props.getStudents - sends a dispatch to my thunk (which is fetchStudents))
const mapDispatchToProps = (dispatch) => ({
	getStudents: () => dispatch(fetchStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
//connect allows you to access the store. Connect returns a function so must call it on the class.
