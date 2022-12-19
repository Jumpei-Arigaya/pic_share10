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
        <div className="w-screen lg:h-screen bg-white p-1 lg:w-64 lg:border-r lg:sticky lg:top-0">
            <ul className="flex justify-between lg:inline">
                <Link href={'/'}>
                    < li className="m-3 p-2 cursor-pointer text-md lg:text-3xl font-extrabold" >
                        PIC SHARE
                    </li >
                </Link>
                <Link href={'/'}>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer">
                        <HomeIcon />
                        <p className="hidden md:inline-block ">
                            ホーム
                        </p>
                    </li>
                </Link>
                <a>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer" onClick={() => modalOpen()}>
                        <CmaeraIcon />
                        <p className="hidden md:inline-block ">
                            シェアする
                        </p>
                    </li>
                </a>
                <Link href={`${loginUser?.username}`}>
                    <li className="flex m-4  p-2 hover:bg-slate-200 cursor-pointer">
                        <ProfileIcon />
                        <p className="hidden md:inline-block ">
                            プロフィール
                        </p>
                    </li>
                </Link>
                <div onClick={onClickLogout}>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer">
                        <LogoutIcon />
                        <p className="hidden md:inline-block ">
                            ログアウト
                        </p>
                    </li>
                </div>
            </ul >
        </div >
    );
}

export default SideMenu;