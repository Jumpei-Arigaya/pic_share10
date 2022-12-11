import { Post } from './../../types/api/Post';
import { LoadingContext } from '../../providers/LoadingProviders';
import { useCallback, useMemo, useState, useContext } from 'react';
import axios from 'axios';
import { FollowUsers } from '../../types/api/FollowUsers';
import { ProfileContext } from '../../providers/ProfileProviders';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [posts, setPosts] = useState<Array<Post>>([]);
    const { setIsLoading } = useContext(LoadingContext);

    const getFollowPostsData = useCallback((loginUserId: number) => {

        setIsLoading(true);
        axios.get<Array<Post>>(`${SERVER_URL}api/posts/`)
            .then(res => {
                res.data.map(post => {
                    const { users } = post
                    // for (let i = 0; i < (post.users?.followered)!.length; i++) {
                    //     if (users?.followered![i].follower_user == loginUserId) {
                    //         setPosts(prev => [...prev, { ...post }])
                    //         break;
                    //     }
                    // }
                    setPosts(res.data)
                })
            })
            .catch(() => console.log('データ取得に失敗しました')
            )
            .finally(() => setIsLoading(false)
            )
    }, [])

    return { getFollowPostsData, posts }
}

