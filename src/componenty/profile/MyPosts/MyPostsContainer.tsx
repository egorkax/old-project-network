import React, {ChangeEvent, KeyboardEvent} from "react";
import {
    ActionProfileType,
    addPostAC,
    PostDataType,
    ProfilePagesTypes,
    updateNewTextAC
} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    postData: ProfilePagesTypes
    dispatch:(action:ActionProfileType)=>void
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state =props.postData

    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const onPostChange = (text:string) => {
        let action=updateNewTextAC(text)
        props.dispatch(action)
    }


    return (
  <MyPosts postData={state.postData} newPostText={state.newPostText}  updateNewPostText={onPostChange} addPost={addPost}

  />
    );

}