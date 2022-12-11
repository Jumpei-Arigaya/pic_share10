import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FollowUsers } from "../types/api/FollowUsers";

export type ProfileUserContextType = {
    isFollow: boolean | null,
    setIsFollow: Dispatch<SetStateAction<boolean | null>>,
}

type Props = {
    children: React.ReactNode;
}

export const ProfileContext = createContext<ProfileUserContextType>({} as ProfileUserContextType);
export const ProfileProvider = ({ children }: Props) => {
    const [isFollow, setIsFollow] = useState<boolean | null>(false);

    return (
        <ProfileContext.Provider value={{ isFollow, setIsFollow }}>
            {children}
        </ProfileContext.Provider>
    )
}

