import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./posts/Post";
import {PostDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: PostDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement =
        props.postData.map((p) => {
            return (
                <Post masages={p.message} likes={p.likes}/>
            )
        })

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {

        props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLTextAreaElement>) =>e.key==='Enter'&&addPost();

    return (
        <div>

            My posts
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} onKeyDown={onKeyDownHandler}/>
                <button onClick={addPost}>add new post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>

                {postsElement}
            </div>

        </div>
    );

}