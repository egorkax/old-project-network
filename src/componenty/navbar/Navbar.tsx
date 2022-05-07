import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <NavLink to='/profile' className={s.item} activeClassName={s.itemActive}>
                Profile
            </NavLink>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.itemActive}>
                Messages
            </NavLink>
            <NavLink to='/news' className={s.item} activeClassName={s.itemActive}>
                News
            </NavLink>
            <NavLink to='/music' className={s.item} activeClassName={s.itemActive}>
                Music
            </NavLink>
            <NavLink to='/setting' className={s.item} activeClassName={s.itemActive}>
                Setting
            </NavLink>

        </nav>
    );
}
