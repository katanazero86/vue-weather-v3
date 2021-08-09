import {createStore} from 'vuex';
import modules from './modules/index';

const store = createStore({
    modules,
    state() {
        return {
            isLoading: false,
        }
    },
    actions: {
        onIsLoadingAction({commit}) {
            commit('onIsLoading');
        },
        offIsLoadingAction({commit}) {
            commit('offIsLoading')
        },
    },
    mutations: {
        onIsLoading(state) {
            state.isLoading = true;
        },
        offIsLoading(state) {
            state.isLoading = false;
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        }
    }
});

export default store