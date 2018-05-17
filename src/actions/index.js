import {
    USERS_FETCH_SUCCESS
} from './types';

export const fetchUsers = () => dispatch => {
        fetch('https://api.github.com/users?per_page=100')
            .then(function(response) {
                return response.json();
            })
            .then(parsedData => {
                dispatch({
                    type: USERS_FETCH_SUCCESS,
                    payload: parsedData
                })
                console.log(parsedData)
            })
            .catch(err => console.log(err))
}