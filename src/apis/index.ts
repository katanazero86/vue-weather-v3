import {api, axios} from '../utils/axiosUtils';

// apis
import weatherRepository from './weather/weatherRepository';

export default {
    weatherRepository: weatherRepository(api, axios)
}
