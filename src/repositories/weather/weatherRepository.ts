interface CurrentWeatherParamInterface {
    q: string,
    appId: string,
}

export default (api, axios) => {
    return {
        async findCurrentWeather({q, appId}: CurrentWeatherParamInterface) {
            return api.get(`/weather?${q}&${appId}`)
        }
    }
}
