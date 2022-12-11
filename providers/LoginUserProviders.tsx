import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Users } from "../types/api/Users";

type Props = {
    children: React.ReactNode;
}

export type LoginUserContextType = {
    loginUser: Users | null;
    setLoginUser: Dispatch<SetStateAction<Users | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);
export const LoginUserProvider = ({ children }: Props) => {
    const [loginUser, setLoginUser] = useState<Users | null>(null)

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    )
}