import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

import axios from "axios";
import {Profile} from "./Profile";
import {getUserProfile, setUserProfileAC, UserProfileType} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


export class ProfileContainerComponents extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 2
        }


        this.props.getUserProfile(userID);
        // usersAPI.getProfile(userID).then(res=>this.props.setUserProfileAC(res.data))


        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        //     .then(response => {
        //         this.props.setUserProfileAC(response.data)
        //     });
    }


    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }


}

type mapStateToPropsType = {
    profile: UserProfileType | null
}
let mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        profile: state.profilePages.profile
    }
}
type mapDispatchToPropsType = {
    getUserProfile: (userID: number) => void

}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

let WithRouterComponentContainer = withRouter(ProfileContainerComponents)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithRouterComponentContainer);
