import { quranAPI } from "@/api";

export default {
    namespaced: true,
    state: {
        quranFull: null,
        loadingQuranFull: false,
        allSurah: [],
        loadingSurah: false,
        singleSurah: [],
        loadingSingleSurah: false,
    },
    getters: {
        getQuranFull: state => state.quranFull,
        getLoading: state => state.loadingQuranFull,
        getAllSurah: state => state.allSurah,
        getLoadingSurah: state => state.loadingSurah,
        getSingleSurah: state => state.singleSurah,
        getLoadingSingleSurah: state => state.loadingSingleSurah
    },
    actions: {
        async getData({commit }) {
            commit('setLoading', true);
            try {
                const res = await quranAPI.get('v1/quran/ar.asad');
                commit('setQuranFull', res.data.data);
                commit('setLoading', false);
            } catch(e) {
                commit('setLoading', false);
                console.log(e);
            }
        },
        async fetchAllSurah({commit }) {
            commit('setLoadingAllSurah', true);
            try {
                const res = await quranAPI.get('v1/surah');
                commit('setAllSurah', res.data.data);
                commit('setLoadingAllSurah', false);
            } catch(e) {
                commit('setLoadingAllSurah', false);
                console.log(e);
            }
        },
        async fetchSingleSurah({commit, dispatch}, payload) {
            commit('setLoadingSingleSurah', true);
            try {
                const res = await quranAPI.get('v1/surah/'+ payload  +'/editions/id.indonesian,id.pickthall');
                commit('setSingleSurah', res.data.data);
                dispatch('global/updateTitleNavbar', res.data.data[0].englishName, { root: true });
                commit('setLoadingSingleSurah', false);
            } catch(e) {
                commit('setLoadingSingleSurah', false);
                console.log(e);
            }
        }
    },
    mutations: {
        setQuranFull(state, data) {
            state.quranFull = data;
        },
        setLoading(state, data) {
            state.loadingQuranFull = data;
        },
        setAllSurah(state, data) {
            state.allSurah = data;
        },
        setLoadingAllSurah(state, data) {
            state.loadingSurah = data;
        },
        setSingleSurah(state, data) {
            state.singleSurah = data;
        },
        setLoadingSingleSurah(state, data) {
            state.loadingSingleSurah = data;
        }
    }
}