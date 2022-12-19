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
            <div className='w-screen lg:flex flex-wrap'>
                <div className='lg:w-1/3 flex flex-wrap ml-1 lg:sticky lg:top-2'>
                    <div className="">
                        <SideMenu />
                    </div>
                    <div className="m-4" onClick={() => router.back()}>
                        <BackButton />
                    </div>
                </div>
                <div className='flex justify-center lg:w-1/3 lg:mt-7'>
                    <Profile />
                </div>
            </div >
            <div>
                <Share />
            </div>
        </div >

    );
}

export default UserProfile;

