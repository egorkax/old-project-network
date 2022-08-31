import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfilePagesTypes = {
    postData: Array<PostDataType>
    newPostText: string
    profile: null | UserProfileType

}
export type UserProfileType={
    "aboutMe": string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": undefined | string
        "large": undefined | string
    }
}

export type PostDataType = {
    id: number
    message: string
    likes: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionProfileType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileAC

let initialState: ProfilePagesTypes = {
    profile:null,
    newPostText: '',
    postData: [
        {id: 1, message: 'Hi world', likes: 11},
        {id: 2, message: 'What you lern?', likes: 22},
        {id: 3, message: 'YO?', likes: 33},
        {id: 4, message: '12345?', likes: 44}
    ]
};

export const profileReduser = (state: ProfilePagesTypes = initialState, action: ActionsType): ProfilePagesTypes => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT": {
            return {...state,newPostText:action.newText}
        }

        case "ADD-POST": {
            const newPost: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0
            }
            return {...state,newPostText:'',postData:[newPost,...state.postData]}
        }
        case "SET-USER-PROFILE":{
            return {
                ...state,
                profile:action.profile
            }
        }
        default:
            return state
    }
}
type setUserProfileAC=ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile:UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile

    }as const
}


export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }
}

export const getUserProfile=(userID:number)=>(dispatch:Dispatch)=>{
    usersAPI.getProfile(userID).then(res=>{
        dispatch(setUserProfileAC(res.data))
    })
}