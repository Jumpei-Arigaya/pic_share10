import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import BackButton from "../components/atoms/icon/BackButton";
import Profile from "../components/organisms/Profile";
import Share from "../components/organisms/Share";
import SideMenu from "../components/organisms/SideMenu";
import { useGetAllUsers } from "../hooks/api/useGetAllUsers";
import { useGetIsFollow } from "../hooks/api/useGetIsFollow";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { LoginUserContext } from "../providers/LoginUserProviders";
import { ProfileUserContext } from "../providers/ProfileUserProviders";

const UserProfile = () => {
    const router = useRouter();
    const URL_PATH = router.query.username;
    const { getAllUsers, users } = useGetAllUsers();
    const { checkAuth } = useCheckAuth();
    const { profileUser, setProfileUser } = useContext(ProfileUserContext);
    const { getIsFollow, isFollow } = useGetIsFollow();
    const { loginUser } = useContext(LoginUserContext);

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        getAllUsers()
    }, [isFollow])

    useEffect(() => {
        checkAuth(users)
        setProfileUser(users.find(res => res.username === URL_PATH)!)
        getIsFollow(loginUser?.user_id!, profileUser?.user_id!);
    }, [users, isFollow])

    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className='col-span-1 flex ml-1 sticky top-2'>
                    <SideMenu />
                    <div className="m-4" onClick={() => router.back()}>
                        <BackButton />
                    </div>
                </div>
                <div className='col-span-1 flex justify-center mt-7'>
                    <Profile />
                </div>
                <Share />
            </div >
        </div >

    );
}

export default UserProfile;

