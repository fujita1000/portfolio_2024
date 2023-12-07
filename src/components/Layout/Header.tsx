// Header.tsx
import React from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';
import UserIcon from './UserIcon';
import { auth } from '@/lib/fb_client';

const Header: React.FC = () => {
  return (
    <header id="top">
      <div className='h-[40px] w-full bg-black relative'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href={"/"}>
              <Image src={"logo.svg"} className='ml-[20px]' width={200} height={100} alt='logo'/>
            </Link>
          </div>
          {auth.currentUser && (
            <div className='absolute top-1/2 right-[20px] transform -translate-y-1/2'>
              <UserIcon />
            </div>
          )}
          {!auth.currentUser && (
            <div className='absolute top-1/2 right-[20px] transform -translate-y-1/2'>
              <Link href={"/mypage"}>
                <div className="rounded-full bg-white w-[30px] h-[30px]"></div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='w-full h-[1px] bg-white opacity-50'></div>
      <Nav />
    </header>
  );
};

export default Header;