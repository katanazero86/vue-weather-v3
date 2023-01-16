import {ref, Ref} from 'vue';

export interface UseAlertModal {
    isOpen: Ref<boolean>;
    alertModalTitle: Ref<string>;
    alertModalContent: Ref<string>;
    openAlertModal(): void;
    closeAlertModal(): void;
}

export default function useAlertModal(): UseAlertModal {

    const isOpen = ref(false);
    const openAlertModal = () => {
        isOpen.value = true;
    };
    const closeAlertModal = () => {
        isOpen.value = false;
        initAlertModalStates();
    };

    const alertModalTitle = ref('알림');
    const alertModalContent = ref('');

    const initAlertModalStates = (): void => {
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
