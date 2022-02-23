import {mutationTypes} from './weatherModuleTypes';

export const weatherModule = {
    namespaced: true,
    state() {
        return {
            currentWeather: null,
            forecast5Days: null,
        };
    },
    actions: {
        currentWeatherAction({commit}, payload) {
            commit(mutationTypes.CURRENT_WEATHER, payload);
        },
        forecast5DaysAction({commit}, payload) {
            commit(mutationTypes.FORECAST_5_DAYS, payload);
        },
        initStatesAction({commit}) {
            commit(mutationTypes.INIT_STATES);
        },
    },
    mutations: {
        currentWeather(state, payload) {
            state.currentWeather = payload;
        },
        forecast5Days(state, payload) {
            state.forecast5Days = payload;
        },
        initStates(state) {
            state.currentWeather = null;
            state.forecast5Days = null;
        }
    },
    getters: {
        getCurrentWeather(state) {
            return state.currentWeather;
        },
        get5DayForecast(state) {
            return state.forecast5Days;
        },
    }
}
