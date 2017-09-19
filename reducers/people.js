/*
* @Author: nshah
* @Date:   2017-09-19 16:07:20
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 16:25:03
*/

import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from '../constants';

const initialState = {
	people: [],
	isFetching: false,
	error: false
}

export default function peopleReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_PEOPLE: 
			return {
				...state,
				isFetching: true,
				people: []
			}
		case FETCHING_PEOPLE_SUCCESS:
			return {
				...state,
				isFetching: false,
				people: action.data,
				error: false
			}
		case FETCHING_PEOPLE_FAILURE: 
			return {
				...state,
				isFetching: false,
				people: [],
				error: true
			}
		default: 
			return state
	}
}