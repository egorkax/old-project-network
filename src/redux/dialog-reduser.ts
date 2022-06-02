import {ActionsType} from "./redux-store";

export type DialogPagesType = {
    dialogsData: Array<DialogsDataType>
    newMessageText: string
    messagesData: Array<MessagesDataType>
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewPostMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type ActionDialogsType=AddMessageActionType|UpdateNewPostMessageActionType



let initialState: DialogPagesType = {
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
};
export const dialogReduser = (state: DialogPagesType = initialState, action: ActionsType): DialogPagesType => {

    if (action.type === 'ADD-MESSAGE') {
        const newMessage: MessagesDataType = {
            id: new Date().getTime(),
            message: state.newMessageText,
        };
        state.messagesData.push(newMessage);
        state.newMessageText = '';

    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText;
    }


    return state;
}

export const addMessageAC = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const updateNewMessageAC = (newText: string): UpdateNewPostMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}
