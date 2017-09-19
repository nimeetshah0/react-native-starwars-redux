/*
* @Author: nshah
* @Date:   2017-09-19 16:07:20
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 16:26:11
*/


import { combineReducers } from 'redux';
import people from './people';

const rootReducer = combineReducers({
	people
});

export default rootReducer;