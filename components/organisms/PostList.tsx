import GoodIcon from "../atoms/icon/GoodIcon";
import { Post } from "../../types/api/Post";
import Date from "../atoms/Date";
import Link from "next/link";

const PostList = ({ users, content, created_at, post_image, }: Post) => {

    return (
        <div className="min-w-[370px] min-h-[640px] m-4 lg:m-8 shadow-2xl bg-white">
            <div className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 m-4">
                    <Link href={`/${users?.username}`}>
                        <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                            <img src={users?.profile_image} loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                        </div>
                    </Link>
                    <div>
                        <Link href={`/${users?.username}`}>
                            <span className="block text-indigo-500">{users?.username}</span>
                        </Link>
                        <span className="block text-gray-400 text-sm">
                            <Date dateString={created_at} />
                        </span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a href="#" className="group w-[340px] h-[470px] block bg-gray-100 overflow-hidden relative mt-1">
                        <img src={post_image} className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </a>
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <p className="text-gray-500 mb-4">{content}</p>
                    {/* <div className="flex justify-end items-end mt-auto">
                        <GoodIcon />
                    </div> */}
                </div>
            </div>
        </div >
    );
}

export default PostList;