// UserIcon.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '@/lib/fb_client';
import { User } from 'firebase/auth';

const UserIcon: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user && (
        <Link href="/mypage">
          <div className='flex items-center h-[40px]'>
            <div
              className="rounded-full bg-white w-[30px] h-[30px]"
              style={{ backgroundImage: `url(${user.photoURL || '/default-profile-image.png'})`, backgroundSize: 'cover' }}
            ></div>
          </div>
        </Link>
      )}
    </>
  );
};

export default UserIcon;