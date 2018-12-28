import { GET_USER } from '../actionTypes';
const BASEURL = 'http://localhost:3000/';


export const addUserToState = userData => ({
    type: GET_USER,
    payload: userData
})


export function login(user) {
    return function (dispatch) {
        return fetch(`${BASEURL}login`,
            {
                headers: {"Content-Type": "application/json; charset=utf-8"},
                method: 'POST',
                body: JSON.stringify(user)
            }
        )
            .then(response => response.json())
            .then(json => {
                debugger
                return dispatch(addUserToState(json))})
    }
}