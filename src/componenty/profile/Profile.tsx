import React from "react";
import s from './Profile.module.css';
import {MyPosts,} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePagesTypes, updateNewPostText} from "../../redux/state";


type ProfilePropsType = {
    profilePages: ProfilePagesTypes
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePages.postData}
                     newPostText={props.profilePages.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}