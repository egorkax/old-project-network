import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type initialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isFetching: boolean,
    isAuth: boolean,

}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,

};

export const authReducer = (state: initialStateType = initialState, action: authReducerACType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" : {
            return {
                ...state,
                ...action.payload,
                isAuth:true
            }
        }

        default:
            return state
    }
}
type authReducerACType = setUserDataACType


type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id, email, login
        }
    } as const
}

export const getAuthUserDataTC=()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setUserDataAC(id, email, login))
            }
        });
}

