import {api, axios} from '../utils/axiosUtils';

// repositories
import weatherRepository from './weather/weatherRepository';

export default {
    weatherRepository: weatherRepository(api, axios)
}
