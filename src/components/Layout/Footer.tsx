// Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='h-[150px]'>
      <Link href="#top">
        <div className="w-full h-[70px] bg-header_bg text-white hover:opacity-60 flex justify-center items-center" aria-label="Back to Top">
          <p>上に戻る</p>
        </div>
      </Link>
      <div className='h-[40px] w-full bg-black'>
      <Link href={"/#"}>
        <div className='flex m-auto w-[200px] my-[10px]'>
          <Image src={"logo.svg"} width={200} height={100} alt='logo' />
        </div>
     </Link>
        <div className="text-center text-white">
          <p>お問い合わせ、質問などは以下のメールアドレスにお願いします。</p>
          <a href="mailto:fujitanao.work@gmail.com" className="underline">fujitanao.work@gmail.com</a>
          <Link href={"privacy-policy"}>
          <p className='my-[10px]'>プライバシーポリシー</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;