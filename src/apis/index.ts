import {api, axios} from '../utils/axios-utils';

import {weatherRepository} from './weather/weather.repository';

export const repositories = {
    weatherRepository: weatherRepository(api, axios)
};