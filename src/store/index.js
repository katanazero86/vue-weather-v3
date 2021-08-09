import {createStore} from 'vuex';
import {mutationTypes} from './rootTypes';
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
            commit(mutationTypes.ON_IS_LOADING);
        },
        offIsLoadingAction({commit}) {
            commit(mutationTypes.OFF_IS_LOADING);
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
