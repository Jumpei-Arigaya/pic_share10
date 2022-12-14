import { useContext, useEffect } from "react";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
import ProfileData from "../molecules/ProfileData";

const SideProfile = () => {
    const { loginUser } = useContext(LoginUserContext);
    const { setProfileUser } = useContext(ProfileUserContext);

    useEffect(() => {
        setProfileUser(loginUser);
    }, [])

    return (
        <div className="flex justify-center items-center bg-slate-50 shadow-lg p-1 w-64 h-64 sticky top-4 rounded-xl">
            <ProfileData />
        </div >
    );
}

export default SideProfile;