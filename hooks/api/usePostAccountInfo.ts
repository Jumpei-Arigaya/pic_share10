import axios from 'axios'
import { sha512 } from 'js-sha512';
import router from 'next/router'
import { useContext } from 'react';
import { LoginUserContext } from '../../providers/LoginUserProviders';

export const usePostAccountInfo = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { loginUser, setLoginUser } = useContext(LoginUserContext);

    const postAccountInfo = (username: string, email: string, password: string) => {
        const hashEmail: string = sha512(email);
        const hashPassword: string = sha512(password);

        axios.post(`${SERVER_URL}api/users/`, {
            follower: null,
            followered: null,
            email: hashEmail,
            username: username,
            password: hashPassword,
            introduction: null
        })
            .then((res) => {
                setLoginUser(res.data)
                router.push('/')
            })
            .catch(() => alert('入力内容を確認してください'))
    }
    return { postAccountInfo }
}