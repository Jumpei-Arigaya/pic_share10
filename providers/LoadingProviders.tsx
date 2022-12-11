import { createContext, Dispatch, SetStateAction, useState } from "react"

export type LoadingContextType = {
    isLoading: boolean | null,
    setIsLoading: Dispatch<SetStateAction<boolean | null>>,
}

type Props = {
    children: React.ReactNode;
}

export const LoadingContext = createContext<LoadingContextType>({} as LoadingContextType);
export const LoadingProvider = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean | null>(false);
    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}