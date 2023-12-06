// Header.tsx
import React from 'react';
import Nav from './Nav';
import UserIcon from './UserIcon';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header id="top">
        <div className='h-[40px] w-full bg-black flex'>
          <Link href={"/"}>
            <Image src={"logo.svg"} className='ml-[20px]' width={200} height={100} alt='logo'/>
          </Link>
            <div className='ml-auto'>
            <UserIcon/>
            </div>
        </div>
        <div className='w-full h-[1px] bg-white opacity-50'></div>
        <Nav/>
    </header>
  );
};

export default Header;