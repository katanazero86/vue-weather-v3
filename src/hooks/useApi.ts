import {useIndexStore} from "@/stores";

export default function useApi() {
    const indexStore = useIndexStore();

    // fetch data
    const runApi = async (targetApi, apiParams): Promise<object> => {
        indexStore.onIsLoadingAction();
        const apiResult = await targetApi(apiParams).catch(error => {
            // api error handling
            console.log(error.response.status, error.response.data?.message);
            return null;
        }).finally(() => {
            indexStore.offIsLoadingAction();
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
