import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
	return type == 'LOAD_POSTS_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

	if (action.type == types.BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (actionTypeEndsInSuccess(action.type)) {
		return state - 1;
	}
	
	return state;
}