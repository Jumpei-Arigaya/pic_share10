import { useContext } from "react";
import { useGetIsFollow } from "../../hooks/api/useGetIsFollow";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { ProfileContext } from "../../providers/ProfileProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
import FollowUserIcon from "../atoms/icon/FollowUserIcon";
import UnFollowUserIcon from "../atoms/icon/UnFollowUserIcon";

const FollowButtons = () => {
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    const { userFollow, userUnFollow } = useGetIsFollow();
    const { loginUser } = useContext(LoginUserContext);
    const { profileUser } = useContext(ProfileUserContext);

    const onClickFollowUserIcon = () => {
        userFollow(loginUser?.id!, profileUser?.id!)
    }

    const onClickUnFollowUserIcon = () => {
        userUnFollow(loginUser?.id!, profileUser?.id!);
    }

    return (
        <div>
            {isFollow ? (
                <div onClick={onClickUnFollowUserIcon} >
                    <UnFollowUserIcon />
                </div>
            ) : (
                <div onClick={onClickFollowUserIcon}>
                    <FollowUserIcon />
                </div>
            )}
        </div>
    );
}

export default FollowButtons;