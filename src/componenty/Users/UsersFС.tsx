import React from "react";
import s from "./User.module.css";
import UserPhoto from "../../assets/img/images.jpg";
import {UserType} from "../../redux/users-reduser";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersFCPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (value: number) => void
    users: UserType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}
export const UsersFC = (props: UsersFCPropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => <span onClick={(e) => props.onPageChanged(p)}
                                  className={props.currentPage === p ? s.selectedPages : ''}>{p}</span>)}
        </div>


        {props.users.map(u => <div key={u.id}>
                <span>
                        <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img className={s.img} src={u.photos.small !== null ? u.photos.small : UserPhoto}/>
                     </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)

                                // usersAPI.unFollowUser(u.id).then(data=>{
                                //      if(data.resultCode === 0){
                                //          props.unFollow(u.id)
                                //
                                //      }
                                //  })


                                // axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {'API-KEY': '86a5f57b-7463-4745-8cef-466ec0a72aa1'}
                                // })
                                //     .then(response => {
                                //         if (response.data.resultCode === 0) {
                                //             props.unFollow(u.id)
                                //         }
                                //     });


                            }}>unFollow</button>
                            : <button onClick={() => {

                                props.follow(u.id)

                                // usersAPI.followUser(u.id).then(data => {
                                //     if (data.resultCode === 0) {
                                //         props.follow(u.id)
                                //     }
                                // })

                                // axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {'API-KEY': '86a5f57b-7463-4745-8cef-466ec0a72aa1'}
                                // })
                                //     .then(response => {
                                //         if (response.data.resultCode === 0) {
                                //             props.follow(u.id)
                                //         }
                                //     });

                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                {/*<span>*/}
                {/*    <div>{props.user.location.country}</div>*/}
                {/*    <div>{props.user.location.city}</div>*/}
                {/*</span>*/}
                </span>
        </div>)}
    </div>;
}

