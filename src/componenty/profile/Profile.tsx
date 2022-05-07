import React from "react";
import s from './Profile.module.css';
import {MyPosts,} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePagesTypes} from "../../redux/state";


type ProfilePropsType={
    profilePages: ProfilePagesTypes
}

export const Profile = (props:ProfilePropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePages.postData}/>
        </div>
    );
}