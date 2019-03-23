import React, {Component} from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			selectedStudent: {},
			displayForm: false
		};

		this.selectStudent = this.selectStudent.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	componentDidMount() {
		this.getStudents();
	}

	async getStudents() {
		console.log('fetching');
		try {
			const {data} = await axios.get('/student');
			this.setState({students: data});
		} catch (err) {
			console.error(err);
		}
	}

	selectStudent(student) {
		return this.setState({
			selectedStudent: student
		});
	}

	showForm = () => {
		this.setState({...this.state, displayForm: !this.state.displayForm});
	};

	render() {
		let show;
		if (this.state.displayForm) {
			show = <NewStudentForm />;
		}
		return (
			<div>
				<h1>Students</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Tests</th>
						</tr>
					</thead>

					<StudentList students={this.state.students} selectStudent={this.selectStudent} />
				</table>
				{this.state.selectedStudent.id ? <SingleStudent student={this.state.selectedStudent} /> : null}
				<button onClick={this.showForm}>Add New Student</button>
				{show}
			</div>
		);
	}
}
