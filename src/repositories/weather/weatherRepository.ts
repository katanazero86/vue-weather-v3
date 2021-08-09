export default (api, axios) => {
    return {
        async findCurrentWeatherByCity({q, appId}) {
            return api.get(`/weather?q=${q}&appid=${appId}`)
        },

        async findCurrentWeatherByGeographicCoordinates({lat, lon, appId}) {
            return api.get(`/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
        }
    }
}
