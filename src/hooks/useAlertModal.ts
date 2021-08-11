import {ref} from 'vue';
import {Ref} from 'vue';

export interface UseAlertModalInterface {
    isOpen: Ref<boolean>,
    openIsOpen(): void,
    closeIsOpen(): void,
    alertModalTitle: Ref<string>,
    setAlertModalTitle(targetTitle: string): void,
    alertModalContent: Ref<string>,
    setAlertModalContent(targetContent: string): void,
    initTitleAndContent(): void,
}

export default function useAlertModal(): UseAlertModalInterface {

    const isOpen = ref<boolean>(false);
    const openIsOpen = (): void => {
        isOpen.value = true;
    };
    const closeIsOpen = (): void => {
        isOpen.value = false;
        initTitleAndContent();
    };

    const alertModalTitle = ref<string>('알림'); // title
    const setAlertModalTitle = (targetTitle: string): void => {
        alertModalContent.value = targetTitle.trim() ? targetTitle.trim() : '';
    }

    const alertModalContent = ref<string>(''); // content
    const setAlertModalContent = (targetContent: string): void => {
        alertModalContent.value = targetContent.trim() ? targetContent.trim() : '';
    }

    const initTitleAndContent = (): void => {
        alertModalContent.value = '알림';
        alertModalContent.value = '';
    }

    return {
        isOpen,
        openIsOpen,
        closeIsOpen,
        alertModalTitle,
        setAlertModalTitle,
        alertModalContent,
        setAlertModalContent,
        initTitleAndContent,
    }
}
