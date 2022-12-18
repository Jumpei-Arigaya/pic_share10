import Link from "next/link";
import router from "next/router";
import { useContext } from "react";
import { usePostModal } from "../../hooks/api/usePostModal";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import CmaeraIcon from "../atoms/icon/CmaeraIcon";
import HomeIcon from "../atoms/icon/HomeIcon";
import LogoutIcon from "../atoms/icon/LogoutIcon";
import ProfileIcon from "../atoms/icon/ProfileIcon";

const SideMenu = () => {
    const { modalState, modalOpen, modalClose } = usePostModal();
    const { loginUser, setLoginUser } = useContext(LoginUserContext);

    const onClickLogout = () => {
        setLoginUser(null);
        localStorage.clear()
        router.push('accounts/login')
    }

    return (
        <div className="lg:h-screen bg-white p-1 lg:w-64 min-w-min lg:border-r sticky top-0">
            <ul className="flex justify-between w-screen lg:inline">
                <Link href={'/'}>
                    < li className="m-3 p-2 cursor-pointer text-3xl font-extrabold" >
                        PIC SHARE
                    </li >
                </Link>
                <Link href={'/'}>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer">
                        <HomeIcon />
                        ホーム
                    </li>
                </Link>
                <a>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer" onClick={() => modalOpen()}>
                        <CmaeraIcon />
                        シェアする
                    </li>
                </a>
                <Link href={`${loginUser?.username}`}>
                    <li className="flex m-4  p-2 hover:bg-slate-200 cursor-pointer">
                        <ProfileIcon />
                        プロフィール
                    </li>
                </Link>
                <p onClick={onClickLogout}><li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer">
                    <LogoutIcon />
                    ログアウト
                </li></p>
            </ul >
        </div >
    );
}

export default SideMenu;