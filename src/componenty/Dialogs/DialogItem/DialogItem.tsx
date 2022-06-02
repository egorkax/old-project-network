import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../redux/dialog-reduser";


type PropsType = {
    dialogItem: DialogsDataType
}

export const DialogItem: React.FC<PropsType> = ({ dialogItem }) => {

    const {id, name} = dialogItem

    return (
        <NavLink className={s.dialog} activeClassName={s.dialogActive} to={'/dialogs/' + id}>
            {name}
        </NavLink>
    );
}






