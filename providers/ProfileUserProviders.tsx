import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Users } from "../types/api/Users";

type Props = {
    children: React.ReactNode;
}

export type ProfileUserContextType = {
    profileUser: Users | null;
    setProfileUser: Dispatch<SetStateAction<Users | null>>;
}

export const ProfileUserContext = createContext<ProfileUserContextType>({} as ProfileUserContextType);
export const ProfileUserProvider = ({ children }: Props) => {
    const [profileUser, setProfileUser] = useState<Users | null>(null)

    return (
        <ProfileUserContext.Provider value={{ profileUser, setProfileUser }}>
            {children}
        </ProfileUserContext.Provider>
    )
}