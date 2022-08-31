import React from "react";
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reduser";
type ProfileInfoType={
    profile:UserProfileType | null
}
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div className={s.profilePhoto}>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            <div className={s.myInfoBlock}>
                {props.profile?<img className={s.UserPhoto} src={props.profile.photos.large} alt={'logo'}/>:null
                }                avatar+desription
            </div>
        </div>
    );
}
