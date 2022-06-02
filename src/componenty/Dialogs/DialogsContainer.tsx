import React from 'react';
import {ActionDialogsType, addMessageAC, DialogPagesType, updateNewMessageAC} from "../../redux/dialog-reduser";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {

    dialogPages: DialogPagesType
    dispatch: (action: ActionDialogsType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
   let state=props.dialogPages

    const addMessage = () => {
        props.dispatch(addMessageAC());

    }
    const onChangeMessage = (text:string) => {
        let action=updateNewMessageAC(text)
        props.dispatch(action)
    }


    return (
        <Dialogs  dialogsData={state.dialogsData} messageData={state.messagesData} newTextMessage={state.newMessageText}  addMessage={addMessage} updateNewMessageText={onChangeMessage}  />
    );
}

