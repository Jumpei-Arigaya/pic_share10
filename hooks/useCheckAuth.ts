import { useEffect } from 'react';
import { useGetAllUsers } from './api/useGetAllUsers';
import { LoginUserContext } from './../providers/LoginUserProviders';
import { useContext } from 'react';
import router from 'next/router';
import { useCallback } from 'react';
import { Users } from '../types/api/Users';

export const useCheckAuth = () => {
    const { loginUser, setLoginUser } = useContext(LoginUserContext);

    const checkAuth = useCallback((users: Users[]) => {
        try {
            const defaultAuthInfo: string = JSON.parse(localStorage.getItem("loginUser") as string)
            const matchLoginUser: Users = users.find(user => user.user_id === defaultAuthInfo)!
            if (!loginUser) {
                if (defaultAuthInfo) {
                    setLoginUser(matchLoginUser!)
                } else {
                    router.replace('/accounts/login')
                }
            }
        } catch (e) {
            console.error(e)
        }
    }, [])
    return { checkAuth }
}