import { SUCCESS_LOGIN } from '../constants/actionTypes';

let initialState = {
    access_token: localStorage.getItem('access_token')
}

interface Action {
    type: string,
    payload: any
}

let authReducer = (state = initialState, action: Action) => {
    let new_state = { ...state }
    switch(action.type) {
        case SUCCESS_LOGIN:
            new_state.access_token = action.payload.access_token;
            return new_state;
        default:
            return state;
    }
}

export default authReducer;