import axios from 'axios'
import { sha512 } from 'js-sha512';
import router from 'next/router'
import { useContext, useCallback } from 'react';
import { LoginUserContext } from '../../providers/LoginUserProviders';
import { v4 as uuidv4 } from 'uuid';

export const usePostAccountInfo = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { loginUser, setLoginUser } = useContext(LoginUserContext);

    const postAccountInfo = useCallback((username: string, email: string, password: string) => {
        const hashEmail: string = sha512(email);
        const hashPassword: string = sha512(password);
        const userId = uuidv4();

        axios.post(`${SERVER_URL}api/users/`, {
            user_id: userId,
            follower: null,
            followered: null,
            email: hashEmail,
            username: username,
            password: hashPassword,
            introduction: null
        })
            .then((res) => {
                setLoginUser(res.data)
                localStorage.clear()
                const loginUserStringfy = JSON.stringify(res.data.user_id);
                window.localStorage.setItem("loginUser", loginUserStringfy)
                router.push('/')
            })
            .catch(() => alert('入力内容を確認してください'))
    }, [])
    return { postAccountInfo }
}