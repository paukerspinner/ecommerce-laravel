import * as types from '../constants/actionTypes';

export const success_login = (payload: any) => {
    return {
        type: types.SUCCESS_LOGIN,
        payload
    }
}