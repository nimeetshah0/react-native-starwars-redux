/*
* @Author: nshah
* @Date:   2017-09-19 16:08:18
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 17:18:07
*/


import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './constants';

export function fetchPeopleFromAPI() {
	return (dispatch) => {
		dispatch(getPeople());
		fetch('https://swapi.co/api/people/')
			.then(res => res.json())
			.then(json => {
				dispatch(getPeopleSuccess(json.results))
			})
			.catch(err => dispatch(getPeopleFailure(err)))
	}
}


function getPeople() {
	return {
		type: FETCHING_PEOPLE
	};
}

function getPeopleSuccess(data) {
	return {
		type: FETCHING_PEOPLE_SUCCESS,
		data
	};
}

function getPeopleFailure() {
	return {
		type: FETCHING_PEOPLE_FAILURE
	};
}