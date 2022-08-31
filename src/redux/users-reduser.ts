import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    "name": string
    "id": number
    "photos": {
        "small": null
        "large": null
    },
    "status": null
    "followed": boolean
}


export type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true

};

export const usersReducer = (state: initialStateType = initialState, action: userReducerACType): initialStateType => {
    switch (action.type) {
        case "FOLLOW" : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        }
        case "UN-FOLLOW" : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        }
        case "SET-USER": {

            return {...state, users: [...action.users]}
        }
        case "CHANGE-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.value
            }
        }
        case "SET-USER-COUNT": {
            return {
                ...state,
                totalUserCount: action.countValue
            }
        }
        case "CHANGE-FETCHING": {
            return {
                ...state,
                isFetching: action.newValue
            }
        }
        default:
            return state
    }
}
type userReducerACType =
    followAcType
    | unFollowAcType
    | setUsersAcType
    | changeCurrentPageACType
    | setUsersCountAcType
    | changeFetchingACType
type followAcType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

type unFollowAcType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: number) => {
    return {
        type: 'UN-FOLLOW',
        userID
    } as const
}
type setUsersAcType = ReturnType<typeof setUsersAc>
export const setUsersAc = (users: UserType[]) => {
    return {
        type: 'SET-USER',
        users
    } as const
}
type setUsersCountAcType = ReturnType<typeof setUsersCountAC>
export const setUsersCountAC = (countValue: number) => {
    return {
        type: 'SET-USER-COUNT',
        countValue
    } as const
}


type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (value: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        value
    } as const
}

type changeFetchingACType = ReturnType<typeof changeFetchingAC>
export const changeFetchingAC = (newValue: boolean) => {
    return {
        type: 'CHANGE-FETCHING',
        newValue
    } as const
}


export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersAc(data.items))
                dispatch(setUsersCountAC(data.totalCount))
                dispatch(changeFetchingAC(false))

            });
    }
}


export const FollowTC = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.followUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userID))
                }
            })
    }
}


export const UnFollowTC = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.unFollowUser(userID).then(data => {
            debugger
            if (data.resultCode === 0) {
                debugger
                dispatch(unFollowAC(userID))

            }
        })
    }
}