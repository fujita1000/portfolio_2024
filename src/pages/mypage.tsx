import { useState, useEffect } from 'react';
import { signInWithGoogle, signOutUser, deleteUserAccount } from "@/lib/fb_client";
import Profile from "@/components/User/Profile"

const MyPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ページがロードされた時にローカルストレージからログイン状態を読み込む
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  // ログイン時の処理
  const handleSignIn = async () => {
    await signInWithGoogle();
    // ログイン成功時に状態を更新
    setIsLoggedIn(true);
    // ローカルストレージにログイン状態を保存
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  };

  // ログアウト時の処理
  const handleSignOut = async () => {
    await signOutUser();
    // ログアウト成功時に状態を更新
    setIsLoggedIn(false);
    // ローカルストレージからログイン状態を削除
    localStorage.removeItem('isLoggedIn');
  };

  // アカウント削除時の処理
  const handleDeleteAccount = async () => {
    await deleteUserAccount();
    // アカウント削除成功時に状態を更新
    setIsLoggedIn(false);
    // ローカルストレージからログイン状態を削除
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="text-white">
      {/* ログインボタン */}
      {!isLoggedIn && 
      <div className='m-auto w-[300px] h-[300px] mt-[300px]'>
      <div className="px-6 sm:px-0 max-w-sm ">
      <button type="button" onClick={handleSignIn} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Googleでログインする<div></div></button>
      </div>
      </div>
      }


    {isLoggedIn && (
    <div className='w-[95%] lg:w-[990px] xl:w-[1200px] 2xl:w-[1248px] h-[573px] m-auto bg-profile_bg my-[30px]'>
      <div className='w-[90%] m-auto h-[90%] py-[50px] relative'>
      <Profile />
      <div className="relative mt-[350px] lg:mt-[400px]">
      <button onClick={handleSignOut} className='w-[150px] h-[50px] lg:w-[400px] 2xl:w-[450px] lg:h-[70px] bg-black absolute left-[0px]'>ログアウトする</button>
      <button onClick={handleDeleteAccount} className='w-[150px] h-[50px] lg:w-[400px] 2xl:w-[450px]  lg:h-[70px] bg-remove_bg absolute right-[0px]'>退会する</button>
      </div>

      </div>
    </div>)}

    </div>
  );
};

export default MyPage;