// https://openweathermap.org/current
// https://openweathermap.org/forecast5

interface ByCityNameInterface {
    q: string;
    appId: string;
}

interface ByGeographicCoordinates {
    lat: string;
    lon: string;
    appId: string;
}

interface WeatherRepositoryInterface {
    findCurrentWeatherByCity({q, appId}: ByCityNameInterface): Promise<any>;
    findCurrentWeatherByGeographicCoordinates({lat, lon, appId}: ByGeographicCoordinates): Promise<any>;
    findForecast5DaysByCity({q, appId}: ByCityNameInterface): Promise<any>;
    findForecast5DaysByGeographicCoordinates({lat, lon, appId}: ByGeographicCoordinates): Promise<any>;
}

export default (api, axios): WeatherRepositoryInterface => {

    return {
        /**
         * 한 위치에 대한 현재 날씨를 조회
         * q={city name} | {city name},{state code} | {city name},{state code},{country code}
         * @param q
         * @param appId
         */
        async findCurrentWeatherByCity({q, appId}): Promise<any> {
            return api.get(`/weather?q=${q}&appid=${appId}`)
        },

        /**
         * 한 위치에 대한 날씨를 조회(위도, 경도를 이용)
         * @param lat
         * @param lon
         * @param appId
         */
        async findCurrentWeatherByGeographicCoordinates({lat, lon, appId}): Promise<any> {
            return api.get(`/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
        },

        /**
         * 3시간 단위의 5일치 날씨 예보를 조회
         * q={city name} | {city name},{state code} | {city name},{state code},{country code}
         * @param q
         * @param appId
         */
        async findForecast5DaysByCity({q, appId}): Promise<any> {
            return api.get(`/forecast?q=${q}&appid=${appId}`)
        },

        /**
         * 3시간 단위의 5일치 날씨 예보를 조회(위도, 경도를 이용)
         * @param lat
         * @param lon
         * @param appId
         */
        async findForecast5DaysByGeographicCoordinates({lat, lon, appId}): Promise<any> {
            return api.get(`/forecast?lat=${lat}&lon=${lon}&appid=${appId}`)
        }
    };
}
