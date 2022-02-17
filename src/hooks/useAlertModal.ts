import {ref, Ref} from 'vue';

export interface UseAlertModalInterface {
    isOpen: Ref<boolean>,
    alertModalTitle: Ref<string>,
    alertModalContent: Ref<string>,
    openAlertModal(): void,
    closeAlertModal(): void,
}

export default function useAlertModal(): UseAlertModalInterface {

    const isOpen = ref<boolean>(false);
    const openAlertModal: () => void = () => {
        isOpen.value = true;
    };
    const closeAlertModal: () => void = () => {
        isOpen.value = false;
        initAlertModalStates();
    };

    const alertModalTitle = ref<string>('알림');
    const alertModalContent = ref<string>('');

    const initAlertModalStates: () => void = (): void => {
        alertModalContent.value = '알림';
        alertModalContent.value = '';
    };

    return {
        isOpen,
        alertModalTitle,
        alertModalContent,
        openAlertModal,
        closeAlertModal,
    }
}
