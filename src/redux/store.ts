import {profileReduser} from "./profile-reduser";
import {dialogReduser} from "./dialog-reduser";

type DialogPages = {
    dialogsData: Array<DialogsDataType>
    newMessageText: string
    messagesData: Array<MessagesDataType>
}
type MessagesDataType = {
    id: number
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewPostMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

type ProfilePagesTypes = {
    postData: Array<PostDataType>
    newPostText: string
}
type PostDataType = {
    id: number
    message: string
    likes: number
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type StateType = {
    profilePages: ProfilePagesTypes
    dialogPages: DialogPages
}
type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewPostMessageActionType

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}


 const store: StoreType = {
    _state: {
        profilePages: {
            newPostText: '',
            postData: [
                {id: 1, message: 'Hi world', likes: 11},
                {id: 2, message: 'What you lern?', likes: 22},
                {id: 3, message: 'YO?', likes: 33},
                {id: 4, message: '12345?', likes: 44}
            ]
        },

        dialogPages: {
            dialogsData: [
                {id: 1, name: 'Polina'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Dimych'},
                {id: 5, name: 'Artem'},
                {id: 6, name: 'Maksim'},
            ],
            newMessageText: '',
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Why are you?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ]
        }

    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },

    dispatch(action) {

        this._state.profilePages = profileReduser(this._state.profilePages, action)
        this._state.dialogPages = dialogReduser(this._state.dialogPages, action)
        this._callSubscriber()


    }
}








