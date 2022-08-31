import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileType, profileReduser} from "./profile-reduser";
import {ActionDialogsType, dialogReduser} from "./dialog-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reduser";
import thunk from "redux-thunk";


export type ActionsType = ActionDialogsType | ActionProfileType


let rootReducer = combineReducers({
    profilePages: profileReduser,
    dialogPages: dialogReduser,
    usersPage: usersReducer,
    auth:authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer,applyMiddleware(thunk));

// @ts-ignore
window.store=store

