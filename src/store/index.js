import { createStore } from "vuex";
export default createStore({
    state: {
        showHeaderFooter: true
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        setShowHeaderFooter(state, paylod) {
            state.showHeaderFooter = paylod
        }
    }
})