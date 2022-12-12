import { useState } from 'react';
import { useContext, useCallback } from 'react';
import { LoginUserContext } from '../providers/LoginUserProviders';
import { useRouter } from 'next/router';
import { Users } from '../types/api/Users';
import axios from 'axios';

export const useLoginAuth = () => {
    const { loginUser, setLoginUser } = useContext(LoginUserContext);
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const router = useRouter();

    const loginAuth = useCallback((email: string, password: string) => {
        axios.get<Array<Users>>(`${SERVER_URL}api/users`)
            .then(res => {
                if (res.data) {
                    const usersData = res.data
                    const matchLoginUser = usersData.find(user => user.email === email && user.password === password)
                    console.log('match', matchLoginUser)
                    if (matchLoginUser) {
                        setLoginUser(matchLoginUser)
                        localStorage.clear()
                        const loginUserStringfy = JSON.stringify(matchLoginUser.id);
                        window.localStorage.setItem("loginUser", loginUserStringfy)
                        router.push('/')
                    } else {
                        alert('ユーザー情報なし')
                    }
                }
            })
            .catch(() => alert('ログイン失敗'))
    }, [])
    return { loginAuth }
}