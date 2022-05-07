import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";


type DialogsPropsType = {
    dialogPages: {
        dialogsData: DialogsDataType[],
        messagesData: MessagesDataType[]
    }


}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogPages.dialogsData.map((dialog) => {
        return (
            <DialogItem dialogItem={dialog}/>
        )
    })

    let messageElement = props.dialogPages.messagesData.map((message) => {
        return (
            <Message message={message.message}/>
        )
    })


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsTtem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messageElement}


            </div>
        </div>
    );
}

