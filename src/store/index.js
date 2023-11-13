import { createStore } from "vuex";
import api from "@/api/index.js"

export default createStore({
    state: {
        showHeaderFooter: true,
        showFooter: true,
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
    },
    getters: {

    },
    actions: {
        LogOut() {
            console.log(12312)
        },
        logIn({ commit }, data) {
            return new Promise((resolve, reject) => {
                api.user.getAuth(data).then(res => {
                    commit('setUserInfo', res.data);
                    localStorage.setItem('access_token', res.data.access_token)
                    localStorage.setItem("userInfo", JSON.stringify(res.data))
                    resolve(res.data);
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    },
    mutations: {
        setShowHeaderFooter(state, paylod) {
            state.showHeaderFooter = paylod
        },
        setShowFooter(state, paylod) {
            state.showFooter = paylod
        },
        setUserInfo(state, paylod) {
            state.userInfo = paylod
        }
    }
})