import { LoadingContext } from './../../providers/LoadingProviders';
import { FollowUsers } from './../../types/api/FollowUsers';
import { ProfileContext } from '../../providers/ProfileProviders';
import { useContext, useState, useCallback } from 'react';
import axios from "axios"

export const useGetIsFollow = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    const [followList, setFollowList] = useState<Array<FollowUsers>>();
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    const getIsFollow = (loginUserId: string, profileUserId: string) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                setFollowList(res.data);
                if (followList) {
                    (followList.find(dt => dt.follower_user === loginUserId && dt.followered_user === profileUserId)) ?
                        (setIsFollow(true)) : (setIsFollow(false))
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    const userFollow = useCallback((followerUser: string, followeredUser: string) => {
        setIsLoading(true)
        axios.post(`${SERVER_URL}api/follow_users/`, {
            follower_user: followerUser,
            followered_user: followeredUser
        })
            .then(res => {
                setIsFollow(true)
            })
            .catch(() => console.log('postエラー'))
            .finally(() => setIsLoading(false))
    }, [])

    const userUnFollow = useCallback(async (followerUser: string, followeredUser: string) => {
        setIsLoading(true);
        let deleteId: number | undefined;
        await axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                deleteId = (res.data.find(list => list.follower_user === followerUser && list.followered_user === followeredUser))?.id
            })
            .catch(() => console.log('データ取得に失敗しました'))
        await axios.delete(`${SERVER_URL}api/follow_users/${deleteId}`, {
        })
            .then(res => {
                setIsFollow(false)
            })
            .catch(() => console.log('deleteエラー'))
            .finally(() => setIsLoading(false))
    }, [])
    return { isFollow, getIsFollow, userFollow, userUnFollow }

}