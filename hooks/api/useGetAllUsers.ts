import axios from 'axios';
import { useState, useCallback } from 'react';
import { Users } from '../../types/api/Users';

export const useGetAllUsers = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const [users, setUsers] = useState<Array<Users>>([]);

    const getAllUsers = () => {
        axios.get<Array<Users>>(`${SERVER_URL}api/users`, { headers: { 'Authorization': API_KEY } })
            .then(res => {
                if (res.data) { setUsers(res.data) }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }
    return { users, getAllUsers }
}