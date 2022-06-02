import {ActionsType} from "./redux-store";

export type ProfilePagesTypes = {
    postData: Array<PostDataType>
    newPostText: string
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
export type ActionProfileType=AddPostActionType|UpdateNewPostTextActionType

let initialState:ProfilePagesTypes= {
        newPostText: '',
        postData: [
            {id: 1, message: 'Hi world', likes: 11},
            {id: 2, message: 'What you lern?', likes: 22},
            {id: 3, message: 'YO?', likes: 33},
            {id: 4, message: '12345?', likes: 44}
        ]
    };

export const profileReduser = (state: ProfilePagesTypes=initialState, action:ActionsType ) => {

    if (action.type === 'ADD-POST') {
        const newPost: PostDataType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likes: 0
        };
       state.postData.push(newPost);
        state.newPostText = '';

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;

    }

    return state;

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