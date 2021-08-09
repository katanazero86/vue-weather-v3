const mutationTypes = {
    CURRENT_WEATHER: 'currentWeather',
    FORECAST_5_DAY: 'forecast5Day',
    INIT_STATES: 'initStates',
};

export const weatherModule = {
    namespaced: true,
    state() {
        return {
            currentWeather: null,
            forecast5Day: null,
        };
    },
    actions: {
        currentWeatherAction({commit}, payload) {
            commit(mutationTypes.CURRENT_WEATHER, payload);
        },
        forecast5DayAction({commit}, payload) {
            commit(mutationTypes.FORECAST_5_DAY, payload);
        },
        initStatesAction({commit}) {
            commit(mutationTypes.INIT_STATES);
        },
    },
    mutations: {
        currentWeather(state, payload) {
            state.currentWeather = payload;
        },
        forecast5Day(state, payload) {
            state.forecast5Day = payload;
        },
        initStates(state) {
            state.currentWeather = null;
            state.forecast5Day = null;
        }
    },
    getters: {
        getCurrentWeather(state) {
            return state.currentWeather;
        },
        get5DayForecast(state) {
            return state.forecast5Day;
        },
    }
}