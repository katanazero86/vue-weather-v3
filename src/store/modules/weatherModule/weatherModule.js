export const weatherModule = {
    namespaced: true,
    state() {
        return {
            currentWeather: null,
        };
    },
    actions: {},
    mutations: {
        initStates(state) {
            state.currentWeather = null;
        }
    },
    getters: {
        getCurrentWeather(state) {
            return state.currentWeather
        }
    }
}