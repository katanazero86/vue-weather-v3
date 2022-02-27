import {api, axios} from '../utils/axios-utils';

// apis
import weatherApis from './weather/weather-apis';

export default {
    weatherApis: weatherApis(api, axios)
}
