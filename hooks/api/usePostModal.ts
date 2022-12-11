import { ModalContext } from '../../providers/ModalProvider';
import { useContext } from 'react';

export const usePostModal = () => {

    const { modalState, setModalState, scrollability, setScrollability } = useContext(ModalContext);

    const modalOpen = () => {
        setModalState(true);
        setScrollability('fixed')
    }

    const modalClose = () => {
        setModalState(false);
        setScrollability(null);
    }

    return { modalState, modalOpen, modalClose, scrollability }
}
