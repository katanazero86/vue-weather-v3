// https://openweathermap.org/current
// https://openweathermap.org/forecast5

export default (api, axios) => {
    return {
        /**
         * 한 위치에 대한 현재 날씨를 조회
         * q={city name} | {city name},{state code} | {city name},{state code},{country code}
         * @param q
         * @param appId
         */
        async findCurrentWeatherByCity({q, appId}) {
            return api.get(`/weather?q=${q}&appid=${appId}`)
        },

        /**
         * 한 위치에 대한 날씨를 조회(위도, 경도를 이용)
         * @param lat
         * @param lon
         * @param appId
         */
        async findCurrentWeatherByGeographicCoordinates({lat, lon, appId}) {
            return api.get(`/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
        },

        /**
         * 3시간 단위의 5일치 날씨 예보를 조회
         * q={city name} | {city name},{state code} | {city name},{state code},{country code}
         * @param q
         * @param appId
         */
        async find5DayForecastByCity({q, appId}) {
            return api.get(`/forecast?q=${q}&appid=${appId}`)
        },

        /**
         * 3시간 단위의 5일치 날씨 예보를 조회(위도, 경도를 이용)
         * @param lat
         * @param lon
         * @param appId
         */
        async find5DayForecastByGeographicCoordinates({lat, lon, appId}) {
            return api.get(`/forecast?lat=${lat}&lon=${lon}&appid=${appId}`)
        }
    }
}
