import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionProfileType, ProfilePagesTypes} from "../../redux/profile-reduser";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profilePages: ProfilePagesTypes
    dispatch: (action: ActionProfileType) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postData={props.profilePages} dispatch={props.dispatch}/>
        </div>
    );
}