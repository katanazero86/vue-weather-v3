import {defineStore} from 'pinia'

interface StateInterface {
    isLoading: boolean;
}

export const useRootStore = defineStore('index', {
    state: (): StateInterface => {
        return {
            isLoading: false,
        };
    },
    actions: {
        onIsLoadingAction(): void {
            this.isLoading = true;
        },
        offIsLoadingAction(): void {
            this.isLoading = false;
        },
    },
    getters: {
        getIsLoading(state): boolean {
            return state.isLoading;
        }
    }
})