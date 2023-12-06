// Header.tsx
import React from 'react';
import Link from 'next/link';

const UserIcon: React.FC = () => {
  return (
    <>
    <Link href={"/mypage"}>
    <div className='flex items-center h-[40px] mr-[20px]'>
    <div className="rounded-full bg-white w-[30px] h-[30px] "></div>
    </div>
    </Link>
    </>
  );
};

export default UserIcon;