import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


// type DialogsPropsType = {
//     // dialogsData: DialogsDataType[]
//     // messageData: MessagesDataType[]
//     // newTextMessage: string
//     dialogPages:DialogPagesType
//     addMessage: () => void
//     updateNewMessageText: (text: string) => void
//
// }

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogPages.dialogsData.map((d) => <DialogItem key={d.id} dialogItem={d}/>);

    let messageElement = props.dialogPages.messagesData.map((m) =><Message key={m.id} message={m.message}/>);


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
            <div className={s.dialogsItem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea placeholder='Enter your message!' value={props.dialogPages.newMessageText}
                          onChange={onChangeMessage} onKeyDown={onKeyDownHandler}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
}

