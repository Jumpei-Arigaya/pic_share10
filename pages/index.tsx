import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import Loading from '../components/organisms/Loading'
import PostList from '../components/organisms/PostList'
import Share from '../components/organisms/Share'
import SideMenu from '../components/organisms/SideMenu'
import SideProfile from '../components/organisms/SideProfile'
import { useGetAllUsers } from '../hooks/api/useGetAllUsers'
import { useGetPosts } from '../hooks/api/useGetPosts'
import { usePostModal } from '../hooks/api/usePostModal'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { LoadingContext } from '../providers/LoadingProviders'
import { LoginUserContext } from '../providers/LoginUserProviders'
import { ProfileUserContext } from '../providers/ProfileUserProviders'

const Home: NextPage = () => {
  const { getPostsData, posts } = useGetPosts();
  const { scrollability } = usePostModal();
  const { isLoading } = useContext(LoadingContext);
  const { loginUser } = useContext(LoginUserContext);
  const { checkAuth } = useCheckAuth();
  const { getAllUsers, users } = useGetAllUsers();
  const { setProfileUser } = useContext(ProfileUserContext);

  useEffect(() => {
    getAllUsers();
    getPostsData();
  }, [])

  useEffect(() => {
    checkAuth(users)
    if (loginUser) {
      setProfileUser(loginUser)
    }
  }, [users])

  return (
    <>
      {isLoading && (
        <Loading />
      )}
      {loginUser && (
        <div className={`${scrollability}`}>
          <div className='lg:flex flex-nowrap'>
            <div className='lg:w-1/3 lg:sticky lg:top-0 ml-1'>
              <SideMenu />
            </div>
            <div className='lg:flex flex-wrap justify-center lg:w-1/3'>
              {posts.map((post) =>
                <PostList key={post.id} content={post.content} created_at={post.created_at} post_image={post.post_image} users={post.users} />
              )}
            </div>
            <div className='hidden lg:w-1/3 lg:mt-32 lg:flex justify-center w-auto'>
              <SideProfile />
            </div>
          </div >
          <div className=''>
            <Share />
          </div>
        </div >
      )}
    </>
  )
}
export default Home