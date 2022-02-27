import {defineStore} from 'pinia'

interface StateInterface {
    currentWeather: object | null;
    forecast5Days: object | null;
}

export const useWeatherStore = defineStore('weather', {
    state: (): StateInterface => {
        return {
            currentWeather: null,
            forecast5Days: null,
        };
    },
    actions: {
        currentWeatherAction(payload): void {
            this.currentWeather = payload;
        },
        forecast5DaysAction(payload): void {
            this.forecast5Days = payload;
        },
        initStatesAction(): void {
            this.currentWeather = null;
            this.forecast5Days = null;
        },
    },
    getters: {
        getCurrentWeather(state): object | null {
            return state.currentWeather;
        },
        getForecast5Days(state): object | null {
            return state.forecast5Days;
        },
    }
})