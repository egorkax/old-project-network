import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacbUP9aGyJ8YGo8ROqVG9uq8oyD-SDw3lpQ&usqp=CAU'/>
            <div className={s.loginBlock}>
                {props.isAuth?props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}