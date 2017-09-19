/*
* @Author: nshah
* @Date:   2017-09-19 16:08:18
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-19 17:50:22
*/

import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native'

export default function configureStore() {
	let store = Reactotron.createStore(app, applyMiddleware(thunk));
	return store;
}
