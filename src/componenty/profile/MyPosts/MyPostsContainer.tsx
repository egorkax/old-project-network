import React from "react";
import {addPostAC, PostDataType, ProfilePagesTypes, updateNewTextAC} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostsPropsType = {
//     postData: ProfilePagesTypes
//     dispatch:(action:ActionProfileType)=>void
// }

// export const MyPostsContainer1 = (props: MyPostsPropsType) => {
//     let state =props.postData
//
//     const addPost = () => {
//         props.dispatch(addPostAC());
//     }
//
//     const onPostChange = (text:string) => {
//         let action=updateNewTextAC(text)
//         props.dispatch(action)
//     }
//
//
//     return (
//   <MyPosts postData={state.postData} newPostText={state.newPostText}  updateNewPostText={onPostChange} addPost={addPost}
//
//   />
//     );
//
// }


type mapStateToPropsType={
    postData:PostDataType[]
    newPostText:string
}
let mapStateToProps=(state:RootState):mapStateToPropsType=>{
    return{
        postData:state.profilePages.postData,
        newPostText:state.profilePages.newPostText
    }
}

type mapDispatchToPropsType={
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return{
        addPost:()=>{
            dispatch(addPostAC());
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewTextAC(text))
        }
    }

}
export type MyPostsPropsType=mapDispatchToPropsType & mapStateToPropsType
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
