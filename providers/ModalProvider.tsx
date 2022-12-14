import { createContext, Dispatch, SetStateAction, useState } from "react";

export type ModalContextType = {
    modalState: boolean | null,
    setModalState: Dispatch<SetStateAction<boolean | null>>,
    scrollability: 'fixed' | null,
    setScrollability: Dispatch<SetStateAction<'fixed' | null>>,
}

type Props = {
    children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);
export const ModalProvider = ({ children }: Props) => {
    const [modalState, setModalState] = useState<boolean | null>(false);
    const [scrollability, setScrollability] = useState<'fixed' | null>(null);

    return (
        <ModalContext.Provider value={{ modalState, setModalState, scrollability, setScrollability }}>
            {children}
        </ModalContext.Provider>
    )
}

