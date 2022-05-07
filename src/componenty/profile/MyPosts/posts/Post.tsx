import React from "react";
import s from './Post.module.css';

export const Post = (props:any) => {
    return (
        <div className={s.item}>
          <img src='https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf'/>
            {props.masages}
            <div>
                <span>like-{props.likes}</span>
            </div>
        </div>


    );
}