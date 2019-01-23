import {GET_USER,SIGN_UP} from '../actionTypes';


const initialState = {
    user: {
        email: '',
        firstName: '',
        lastName: '',
        admin: ''
    },
    isUserNew: false,
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case SIGN_UP: {
            return {
                ...state,
                isUserNew: action.payload
            }
        }
        default:
            return state;
    }
}

export default rootReducer;
