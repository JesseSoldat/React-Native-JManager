import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
  	return <ListItem employee={employee} />;
  }

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	//state.employees is and object return from firebase with key/value pairs
	//(val, uid) val = name, phone, shift  |||| uid = id:
	//for each object return
	//{name: 'Jesse', phone: '555-345-3435', shift: 'Monday' id: '24sr32fsrww33'}
	//into a new array called employees
	const employees = _.map(state.employees, (val, uid) => {
		return {...val, uid };
	});
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);