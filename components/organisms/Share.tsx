import { useContext, useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { usePostModal } from "../../hooks/api/usePostModal";
import { usePostPost } from "../../hooks/api/usePostPost";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import BackButton from "../atoms/icon/BackButton";
import InputImageFile from "../atoms/InputImageFile";
import PostPreview from "../molecules/PostPreview";
import ProfileData from "../molecules/ProfileData";

export default function App() {

    const { modalState, modalClose } = usePostModal();
    const [content, setContent] = useState('');
    const { loginUser } = useContext(LoginUserContext);
    const dateTime = new Date();
    const { getAllUsers, users } = useGetAllUsers();
    const { postPost } = usePostPost();
    const [postImage, setPostImage] = useState<Blob | null>();

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className="App">
            {modalState && (
                <div>
                    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0  mt-4 lg:mt-0">
                        <div className="bg-white h-screen w-screen lg:h-[650px] lg:w-[900px] rounded-md">
                            <div className="flex justify-between items-center h-[50px] border-b p-3">
                                <div onClick={() => modalClose()}>
                                    <BackButton />
                                </div>
                                <h1 className="text-center text-xl">新規投稿を作成</h1>
                                <button className="text-blue-600" onClick={() => postPost(content, postImage!)}>SHARE</button>
                            </div>
                            <div className="flex justify-center flex-wrap lg:h-[600px]">
                                <div className="w-7/8 md:w-2/3 flex justify-center lg:items-center border-r">
                                    <PostPreview profile_image={loginUser?.profile_image} user_name={loginUser?.username} content={content} postImage={postImage!} />
                                </div>
                                <div className="w-1/8 md:w-1/3 border-b">
                                    <div className="border">
                                        <div className="m-3 hidden lg:inline-block">
                                            <ProfileData />
                                        </div>
                                        <div className="mt-5 mx-3">
                                            <InputImageFile setPostImage={setPostImage} />
                                        </div>
                                        <div className="flex justify-center">
                                            <textarea className="border-gray-400 border mt-7 w-60 h-20" placeholder="20文字までのコメントを入力" maxLength={20} wrap='soft' value={content} onChange={(e) => setContent(e.target.value)} />
                                        </div>
                                        <p className="text-end mt-3 text-gray-600">{content.length}/20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div >
    );
}
