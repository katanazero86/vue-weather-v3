import {useStore} from 'vuex';
import {actionTypes} from '@/store/rootTypes';

export default function useApiIsLoading() {
    const store = useStore();
    const onIsLoading = () => {
        store.dispatch(actionTypes.ON_IS_LOADING_ACTION);
    };
    const offIsLoading = () => {
        store.dispatch(actionTypes.OFF_IS_LOADING_ACTION);
    }

    return {onIsLoading, offIsLoading}
}
