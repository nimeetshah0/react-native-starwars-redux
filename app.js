/*
* @Author: nshah
* @Date:   2017-09-19 16:08:18
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 17:44:10
*/

import React from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import './utils/ReactotronConfig'
import { fetchPeopleFromAPI } from './actions';

let styles;

const App = (props) => {
	const {
		container,
		text,
		button,
		buttonText
	} = styles

	const { people, isFetching } = props.people
	console.log('people: ', props.people);

	return (
		<View style={container}>
			<Text style={text}>Starwars App</Text>
			<TouchableHighlight style={button} onPress={() => props.getPeople()}>
				<Text style={buttonText}>Fetch data</Text>
			</TouchableHighlight>
			{
				isFetching && <Text>Loading</Text>
			}
			{
				people.length ? (
					people.map((person, idx) => {
						return (
							<View key={idx}>
								<Text>Name: {person.name}</Text>
								<Text>Birth year: {person.birth_year}</Text>
							</View>
						)
					})
				) : null
			}
		</View>
	)
}

styles = StyleSheet.create({
	container: {
		marginTop: 100,
		paddingLeft: 20,
		paddingRight: 20
	},
	text: {
		textAlign: 'center'
	},
	button: {
		backgroundColor: 'blue',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white'
	}
});

function mapStateToProps(state) {
	return {
		people: state.people
	}
}


function mapDispatchToProps(dispatch) {
	return {
		getPeople: () => dispatch(fetchPeopleFromAPI())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App); 