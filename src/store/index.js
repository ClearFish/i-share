import { createStore } from "vuex";
export default createStore({
    state: {
        showHeaderFooter: true,
        showFooter: true
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        setShowHeaderFooter(state, paylod) {
            state.showHeaderFooter = paylod
        },
        setShowFooter(state, paylod) {
            state.showFooter = paylod
        }
    }
})