export default {
    namespaced: true,
    state: {
        titleNavbar: "Al-qur'an"
    },
    getters: {
        getTitleNavbar: state => state.titleNavbar,
    },
    actions: {
        updateTitleNavbar({commit}, payload) {
            commit('setTitleNavbar', payload)
        }
    },
    mutations: {
        setTitleNavbar(state, data) {
            state.titleNavbar = data;
        }
    }
}