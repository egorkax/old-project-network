import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '85e61eec-2709-42bc-ad6c-d857fd17bfda'
    }

})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
    },

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

