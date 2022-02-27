import {useIndexStore} from "@/stores";

export default function useApi() {
    const indexStore = useIndexStore();

    // fetch data
    const runApi = async (targetApi, apiParams) => {
        indexStore.onIsLoadingAction();
        const apiResult = await targetApi(apiParams).catch(error => {
            // api error handling
            console.log(error.response.status, error.response.data?.message);
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
