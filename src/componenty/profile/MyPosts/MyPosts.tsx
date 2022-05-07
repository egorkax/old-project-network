import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./posts/Post";
import {PostDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: PostDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {



    let postsElement=
        props.postData.map((p)=>{
        return(
            <Post masages={p .message} likes={p.likes}/>
        )
    })
    return (
        <div>

            My posts
            <div>
                <textarea></textarea>
                <button>add new post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>

                {postsElement}
            </div>

        </div>
    );

}