import React from 'react';
import {ActionDialogsType, addMessageAC, DialogPagesType, updateNewMessageAC} from "../../redux/dialog-reduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

//
// type DialogsPropsType = {
//
//     dialogPages: DialogPagesType
//     dispatch: (action: ActionDialogsType) => void
// }
//
// export const DialogsContainer = (props: DialogsPropsType) => {
//    let state=props.dialogPages
//
//     const addMessage = () => {
//         props.dispatch(addMessageAC());
//
//     }
//     const onChangeMessage = (text:string) => {
//         let action=updateNewMessageAC(text)
//         props.dispatch(action)
//     }
//
//
//     return (
//         <Dialogs  dialogsData={state.dialogsData} messageData={state.messagesData} newTextMessage={state.newMessageText}  addMessage={addMessage} updateNewMessageText={onChangeMessage}  />
//     );
// }

type mapStateToPropsType={
    dialogPages:DialogPagesType
}

let mapStateToProps=(state:RootState):mapStateToPropsType=>{
    return{
        dialogPages:state.dialogPages

    }
}

type mapDispatchToPropsType={
    updateNewMessageText:(text:string)=>void
    addMessage:()=>void
}

let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return{
        updateNewMessageText:(text:string)=>{
            dispatch(updateNewMessageAC(text))
        },
        addMessage:()=>{
            dispatch(addMessageAC())
        }
    }
}
export type DialogsPropsType=mapStateToPropsType & mapDispatchToPropsType
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);

