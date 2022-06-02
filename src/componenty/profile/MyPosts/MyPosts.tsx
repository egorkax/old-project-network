import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./posts/Post";
import {PostDataType, updateNewTextAC} from "../../../redux/profile-reduser";

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    postData: PostDataType[]
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement =
        props.postData.map((p) => {
            return (
                <Post masages={p.message} likes={p.likes}/>
            )
        })


    const addPost = () => {
        let test = props.newPostText
        if (test.trim())
            props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && addPost();

    return (
        <div>

            My posts
            <div>
                <textarea placeholder='enter your post!' value={props.newPostText} onChange={onPostChange}
                          onKeyDown={onKeyDownHandler}/>
                <button onClick={addPost}>add new post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>

                {postsElement}
            </div>

        </div>
    );

}