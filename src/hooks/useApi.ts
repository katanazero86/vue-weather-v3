import {computed} from 'vue';
import {useStore} from 'vuex';
import {actionTypes} from '@/store/rootTypes';

type TargetApi = (params: object) => Promise<any>;

export default function useApi() {
    const store = useStore();

    // fetch loading
    const isLoading = computed(() => store.state.isLoading);
    const onIsLoading = () => {
        store.dispatch(actionTypes.ON_IS_LOADING_ACTION);
    };
    const offIsLoading = () => {
        store.dispatch(actionTypes.OFF_IS_LOADING_ACTION);
    };

    // fetch data
    const runApi = async (targetApi: TargetApi, apiParams: object, actionName: string = '') => {
        onIsLoading();
        const apiResult = await targetApi(apiParams).catch(error => {
            // api error handling
            console.log(error.response.status, error.response.data?.message);
            offIsLoading();
        });

        if (apiResult.status === 200) {
            const responseData = {...apiResult.data};

            if (actionName.trim() !== '' && actionName !== null) {
                store.dispatch(actionName, responseData);
            }
            offIsLoading();
            return responseData;
        } else {
            // status 가 200 이 아닌 경우 handling
            offIsLoading();
        }

    }

    return {
        isLoading,
        runApi,
    }
}
