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
    checkAuth(users)
    getPostsData();
  }, [])


  useEffect(() => {
    if (loginUser) {
      setProfileUser(loginUser)

    }
  }, [users])

  return (
    <>
      {loginUser && (
        <div className={`${scrollability}`}>
          <div className='grid grid-cols-3'>
            <div className='col-span-1 ml-1 sticky top-0'>
              <SideMenu />
            </div>
            <div className='col-span-1'>
              <div className='flex flex-wrap justify-center'>
                {isLoading && (
                  <Loading />
                )}
                {posts.map((post) =>
                  <PostList key={post.id} content={post.content} created_at={post.created_at} post_image={post.post_image} users={post.users} />
                )}
              </div>
            </div>
            <div className='col-span-1 flex justify-center mt-32'>
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const res = await fetch('http://localhost:8000/api/posts/')
//   // const posts = (await res.json()) as Posts;

//   const posts: Array<Posts> = [{
//     id: 1,
//     content: "yeah"
//   }, {
//     id: 2,
//     content: "hello"
//   }
//   ]

//   return {
//     props: {
//       posts
//     },
//   };
// };

