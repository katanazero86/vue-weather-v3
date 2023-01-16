import {useRootStore} from "@/stores";

export default function useApi() {
    const rootStore = useRootStore();

    // fetch data
    const runApi = async (targetApi, apiParams): Promise<object> => {
        rootStore.onIsLoadingAction();
        const apiResult = await targetApi(apiParams).catch(error => {
            // api error handling
            console.log(error.response.status, error.response.data?.message);
            return null;
        }).finally(() => {
            rootStore.offIsLoadingAction();
        });

        if (apiResult.status === 200) {
            const responseData = {...apiResult.data};
            return responseData;
        } else {
            console.error(apiResult.status);
            console.error(apiResult);
        }
    };

    return {
        runApi,
    }
}
