import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';

class LoginForm extends Component {

	renderButton(){
		if(false) {
			return <Spinner size="large" />
		}
		return (
			<Button>
				Login
			</Button>
		);
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Password"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm;