import { GET_USER, SIGN_UP } from '../actionTypes';
const BASEURL = 'http://localhost:3001/';


export const addUserToState = userData => ({
    type: GET_USER,
    payload: userData
})

export const userIsNew = isNew => ({
    type: SIGN_UP,
    payload: isNew
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
                if(json.success) {
                    return dispatch(addUserToState(json));
                } else {
                    return dispatch(userIsNew(true));
                }
            })
    }
}