import {Ref} from "vue";
import {useQuery} from '@tanstack/vue-query'
import {repositories} from "@/apis";
import {AxiosResponse, AxiosError} from "axios";

const {weatherRepository} = repositories;

type OnSuccessType = (result: AxiosResponse) => void;
type OnErrorType = (err: AxiosError) => void;

interface DefaultParams {
    appId: string;
    isEnable: Ref<boolean>;
}

interface FindCurrentWeatherByCityParams extends DefaultParams {
    q: Ref<string>;
};
export const useFindCurrentWeatherByCity = (findCurrentWeatherByCitySuccess: OnSuccessType, findCurrentWeatherByCityError: OnErrorType, params: FindCurrentWeatherByCityParams) => {
    return useQuery(['findCurrentWeatherByCity', params.q, params.appId], ({queryKey}) => weatherRepository.findCurrentWeatherByCity(<{ q: string; appId: string }>{
        q: queryKey[1],
        appId: queryKey[2],
    }), {
        enabled: params.isEnable,
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: findCurrentWeatherByCitySuccess,
        onError: findCurrentWeatherByCityError
    });
};

interface FindForecast5DaysByCityParams extends DefaultParams {
    q: Ref<string> | string;
};
export const useFindForecast5DaysByCity = (findForecast5DaysByCitySuccess: OnSuccessType, findForecast5DaysByCityError: OnErrorType, params: FindForecast5DaysByCityParams) => {
    return useQuery(['findForecast5DaysByCity', params.q, params.appId], ({queryKey}) => weatherRepository.findForecast5DaysByCity(<{ q: string; appId: string }>{
        q: queryKey[1],
        appId: queryKey[2],
    }), {
        enabled: params.isEnable,
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: findForecast5DaysByCitySuccess,
        onError: findForecast5DaysByCityError
    });
};

interface FindCurrentWeatherByGeographicCoordinatesParams extends DefaultParams {
    lat: Ref<string>;
    lon: Ref<string>;
};
export const useFindCurrentWeatherByGeographicCoordinates = (findCurrentWeatherByGeographicCoordinatesSuccess: OnSuccessType, findCurrentWeatherByGeographicCoordinatesError: OnErrorType, params: FindCurrentWeatherByGeographicCoordinatesParams) => {
    return useQuery(['findCurrentWeatherByGeographicCoordinates', params.lat, params.lon, params.appId], ({queryKey}) => weatherRepository.findCurrentWeatherByGeographicCoordinates(<{ lat: string; lon: string; appId: string; }>{
        lat: queryKey[1],
        lon: queryKey[2],
        appId: queryKey[3],
    }), {
        enabled: params.isEnable,
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: findCurrentWeatherByGeographicCoordinatesSuccess,
        onError: findCurrentWeatherByGeographicCoordinatesError,
    });
};

interface FindForecast5DaysByGeographicCoordinatesParams extends DefaultParams {
    lat: Ref<string>;
    lon: Ref<string>;
};
export const useFindForecast5DaysByGeographicCoordinates = (findForecast5DaysByGeographicCoordinatesSuccess: OnSuccessType, findForecast5DaysByGeographicCoordinatesError: OnErrorType, params: FindForecast5DaysByGeographicCoordinatesParams) => {
    return useQuery(['findForecast5DaysByGeographicCoordinates', params.lat, params.lon, params.appId], ({queryKey}) => weatherRepository.findForecast5DaysByGeographicCoordinates(<{ lat: string; lon: string; appId: string; }>{
        lat: queryKey[1],
        lon: queryKey[2],
        appId: queryKey[3],
    }), {
        enabled: params.isEnable,
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: findForecast5DaysByGeographicCoordinatesSuccess,
        onError: findForecast5DaysByGeographicCoordinatesError,
    });
};