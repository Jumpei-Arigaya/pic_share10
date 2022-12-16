import { sha512 } from "js-sha512";
import Link from "next/link";
import { useState } from "react";
import { usePostAccountInfo } from "../../hooks/api/usePostAccountInfo";

const Emailsignup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { postAccountInfo } = usePostAccountInfo();

    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="max-w-lg border rounded-lg mx-auto bg-white ">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mt-6">PIC SHARE</h2>
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        {/* <Link href='/'>
                            <button className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3 my-3">
                                <svg className="w-5 h-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                                    <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                                    <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                                    <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                                </svg>
                                Googleでログイン
                            </button>
                        </Link> */}
                        {/* <div className="flex justify-center items-center relative">
                            <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                            <span className="bg-white text-gray-400 text-sm relative px-4">または</span>
                        </div> */}
                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス</label>
                            <input name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード</label>
                            <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">ユーザー名</label>
                            <input name="username" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="text" autoComplete="new-off" placeholder="15文字以内で入力してください" maxLength={15} value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <button onClick={() => postAccountInfo(username, email, password)} type="submit" className="flex justify-center items-center w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3 mt-4">
                            登録する
                        </button>
                    </div>
                    <div className="flex justify-center items-center bg-slate-50 p-4">
                        <p className="text-gray-500 text-sm text-center">アカウントをお持ちですか？
                            <Link href='/accounts/login' className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 ml-3">
                                ログインする
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Emailsignup;