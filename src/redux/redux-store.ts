import {combineReducers, createStore} from "redux";
import {ActionProfileType, profileReduser } from "./profile-reduser";
import {ActionDialogsType, dialogReduser} from "./dialog-reduser";

export type ActionsType =ActionDialogsType|ActionProfileType



let reducers = combineReducers({
    profilePages: profileReduser,
    dialogPages: dialogReduser
})

export type RootState = ReturnType<typeof reducers>

export let store = createStore(reducers);
