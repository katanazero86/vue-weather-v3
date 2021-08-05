import {ref} from 'vue';

export default function useAlertModal(): object {

    const isOpen = ref(false);
    const openIsOpen = (): void => {
        isOpen.value = true;
    };
    const closeIsOpen = (): void => {
        isOpen.value = false;
        initTitleAndContent();
    };

    const alertModalTitle = ref('알림'); // title
    const setAlertModalTitle = (targetTitle: string): void => {
        alertModalContent.value = targetTitle.trim() ? targetTitle.trim() : '';
    }

    const alertModalContent = ref(''); // content
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
