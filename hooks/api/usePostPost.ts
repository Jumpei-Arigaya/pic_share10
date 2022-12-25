import { LoginUserContext } from './../../providers/LoginUserProviders';
import { useContext } from 'react';
import { useCallback } from 'react';
import { usePostModal } from './usePostModal';
import axios from 'axios';
import router from 'next/router';
import { LoadingContext } from '../../providers/LoadingProviders';

export const usePostPost = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const { modalState, modalClose } = usePostModal();
    const { loginUser } = useContext(LoginUserContext);
    const { setIsLoading } = useContext(LoadingContext);


    const postPost = useCallback((content: string, postImage: Blob) => {
        const formData = new FormData();
        formData.append('user_id', loginUser?.user_id!);
        formData.append('content', content);
        formData.append('post_image', postImage);
        setIsLoading(true)
        axios.post(`${SERVER_URL}api/posts/`,
            formData,
            { headers: { 'Authorization': API_KEY } }
        )
            .then(() => {
                modalClose();
                router.replace('/')
            })
            .catch((e) => alert('入力内容を確認してください'))
            .finally(() => setIsLoading(false))
    }, [])
    return { postPost }
}