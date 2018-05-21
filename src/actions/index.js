import {
    USERS_FETCH_SUCCESS,
    SINGLE_USER_FETCH_SUCCESS
} from './types';

export const fetchUsers = (per_page, since) => dispatch => {
    fetch(`https://api.github.com/users?since=${since}&per_page=${per_page}`)
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

export const fetchSingleUser = (id) => dispatch => {
    fetch(`https://api.github.com/users/${id}`)
            .then(function(response) {
                return response.json();
            })
            .then(parsedData => {
                dispatch({
                    type: SINGLE_USER_FETCH_SUCCESS,
                    payload: parsedData
                })
                console.log(parsedData)
            })
            .catch(err => console.log(err))
}

let since = 0;
export const nextPage = () => {
    const per_page = 20;
    function nextSince(){
        since+=20;
        return since;
    };

    return this.fetchUsers(per_page, nextSince() )
}

export const prevPage = () => {
    const per_page = 20;
    function nextSince(){
        since > 0 ? since -= 20 : since = 0;
        return since;
    };

    return this.fetchUsers(per_page, nextSince() )
}