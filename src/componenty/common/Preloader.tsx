import preloader from '../../assets/img/Ellipsis-1s-200px.svg';
import s from "../Users/UserLoad.module.css";
import React from "react";

export const Preloader = (props: any) => {
    return <img className={s.logo} src={preloader} alt={'loader'}/>
}