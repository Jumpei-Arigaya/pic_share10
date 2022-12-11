import { useContext } from "react";
import { LoadingContext } from "../../providers/LoadingProviders";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
import FollowButtons from "../molecules/FollowButtons";
import ProfileData from "../molecules/ProfileData";

type Props = {
    profileUserId?: number;
    profileUsername?: string;
    profileUserImage?: string;
}

const Profile = () => {
    const { loginUser } = useContext(LoginUserContext);
    const { profileUser } = useContext(ProfileUserContext);
    const { isLoading } = useContext(LoadingContext);

    return (
        <div className="shadow-lg p-1 w-96 h-96 bg-white">
            <div>
                <div className="m-5 flex justify-between">
                    <ProfileData />
                    {((loginUser?.id !== profileUser?.id) && !isLoading) && (
                        <FollowButtons />
                    )}
                </div>
                <hr className="m-1" />
                <p className="m-5">{profileUser?.introduction}</p>
            </div>
        </div>
    );
}

export default Profile;