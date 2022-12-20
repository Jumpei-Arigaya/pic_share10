import { Post } from './../../types/api/Post';
import { LoadingContext } from '../../providers/LoadingProviders';
import { useCallback, useMemo, useState, useContext } from 'react';
import axios from 'axios';
import { FollowUsers } from '../../types/api/FollowUsers';
import { ProfileContext } from '../../providers/ProfileProviders';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const [posts, setPosts] = useState<Array<Post>>([]);
    const { setIsLoading } = useContext(LoadingContext);

    const getPostsData = useCallback(() => {

        setIsLoading(true);
        axios.get<Array<Post>>(`${SERVER_URL}api/posts/`, { headers: { 'Authorization': API_KEY } })
            .then(res => {
                res.data.map(post => {
                    const { users } = post
                    setPosts(res.data)
                })
            })
            .catch(() => console.log('データ取得に失敗しました')
            )
            .finally(() => setIsLoading(false)
            )
    }, [])

    return { getPostsData, posts }
}

