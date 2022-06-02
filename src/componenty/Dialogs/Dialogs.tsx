import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType,} from "../../redux/dialog-reduser";


type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messageData: MessagesDataType[]
    newTextMessage: string
    addMessage: () => void
    updateNewMessageText: (text: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsData.map((dialog) => {
        return (
            <DialogItem dialogItem={dialog}/>
        )
    })

    let messageElement = props.messageData.map((message) => {
        return (
            <Message message={message.message}/>
        )
    })


    const addMessage = () => {
        props.addMessage();
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageElement = e.currentTarget.value

        props.updateNewMessageText(newMessageElement)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && addMessage();

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsTtem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea placeholder='Enter your message!' value={props.newTextMessage}
                          onChange={onChangeMessage} onKeyDown={onKeyDownHandler}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
}

