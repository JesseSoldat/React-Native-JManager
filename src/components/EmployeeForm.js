import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="Joe"
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"

					/>
				</CardSection>

				<CardSection>
					<Text>Shift</Text>
				</CardSection>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps)(EmployeeForm);