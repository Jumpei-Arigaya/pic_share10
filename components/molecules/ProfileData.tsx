import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../providers/ProfileProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";

const ProfileData = () => {
    const { profileUser } = useContext(ProfileUserContext);
    const [followUsersCount, setFollowUsersCount] = useState<number>();
    const [followerUsersCount, setFollowerUsersCount] = useState<number>();
    const { isFollow, setIsFollow } = useContext(ProfileContext);

    useEffect(() => {
        if (profileUser) {
            setFollowUsersCount(Object.keys(profileUser.follower!).length)
            setFollowerUsersCount(Object.keys(profileUser.followered!).length)
        }
    }, [isFollow, profileUser])

    return (
        <div className="flex">
            <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src={profileUser?.profile_image} className="w-full h-full object-cover object-center" />
            </div>
            <div className="ml-8">
                <span className="block text-indigo-500">{profileUser?.username}</span>
                <div className="mt-2 text-gray-400 text-sm">
                    <p>{`フォロー  ${followUsersCount}`}</p>
                    <p>{`フォロワー ${followerUsersCount}`}</p>
                </div>
            </div>
        </div >

    );
}

export default ProfileData;