import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC, changeFetchingAC,
    followAC, FollowTC, getUsersTC,
    setUsersAc, setUsersCountAC,
    unFollowAC, UnFollowTC,
    UserType
} from "../../redux/users-reduser";
import {UsersFC} from "./UsersFС";

import {Preloader} from "../common/Preloader";

class UsersContainerComponents extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        // this.props.changeFetchingAC(true)
        //
        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsersAc(data.items)
        //     this.props.setUsersCountAC(data.totalCount)
        //     this.props.changeFetchingAC(false)
        //
        // });
    }

    onPageChanged = (value: number) => {

        this.props.getUsersThunkCreator(value, this.props.pageSize);

        //
        // this.props.changeCurrentPageAC(value);
        // this.props.changeFetchingAC(true)
        //
        // getUsers(value, this.props.pageSize).then(data => {
        //     this.props.setUsersAc(data.items)
        //     this.props.changeFetchingAC(false)
        //
        // });

    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <UsersFC totalUserCount={this.props.totalUserCount}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     currentPage={this.props.currentPage}
                     follow={this.props.FollowTC}
                     unFollow={this.props.UnFollowTC}
            />
        </>
    }


}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
let mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
type mapDispatchToPropsType = {
    setUsersAc: (users: UserType[]) => void
    setUsersCountAC: (countValue: number) => void
    changeCurrentPageAC: (value: number) => void
    changeFetchingAC: (newValue: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    FollowTC:(userId:number)=>void
    UnFollowTC:(userId:number)=>void
}
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUser: (users: UserType[]) => {
//             dispatch(setUsersAc(users))
//         },
//         setUserCount: (countValue: number) => {
//             dispatch(setUsersCountAC(countValue))
//         },
//         changeCurrentPage: (value: number) => {
//             dispatch(changeCurrentPageAC(value))
//         },
//         changeFetching: (newValue: boolean) => {
//             dispatch(changeFetchingAC(newValue))
//         },
//
//     }
// }

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
export const UsersContainer = connect(mapStateToProps, {
    followAC,
    unFollowAC,
    setUsersAc,
    setUsersCountAC,
    changeCurrentPageAC,
    changeFetchingAC,
    getUsersThunkCreator: getUsersTC,
    FollowTC,
    UnFollowTC
})(UsersContainerComponents);
