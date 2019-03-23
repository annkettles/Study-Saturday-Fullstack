import React from 'react';

class newStudentForm extends React.Component {
	render() {
		return (
			<div>
				<form>
					First Name:
					<input type="text" name="firstName" />
					Last Name:
					<input type="text" name="lastName" />
					Email:
					<input type="text" name="email" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
export default newStudentForm;
