import {
    USERS_FETCH_SUCCESS, SINGLE_USER_FETCH_SUCCESS
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case USERS_FETCH_SUCCESS:
            return { ...state, list: action.payload };
        case SINGLE_USER_FETCH_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}