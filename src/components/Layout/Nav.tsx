import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
  const [barWidth, setBarWidth] = useState<number | null>(null);
  const controls = useAnimation();
  const homeItemRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  const handleItemClick = (index: number) => {
    const selectedItem = document.getElementById(`${index}-item`);
    if (selectedItem) {
      setBarWidth(selectedItem.offsetWidth);
      controls.start({ x: selectedItem.offsetLeft });
    }
  };

  useEffect(() => {
    if (homeItemRef.current) {
      setBarWidth(homeItemRef.current.offsetWidth);
      controls.start({ x: homeItemRef.current.offsetLeft });
    }

    const handleRouteChange = () => {
      // ページ遷移時にバーを移動させる処理
      const selectedItem = document.getElementById(`${router.pathname === '/' ? 0 : 1}-item`);
      if (selectedItem) {
        setBarWidth(selectedItem.offsetWidth);
        controls.start({ x: selectedItem.offsetLeft });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [controls, router]);

  return (
    <nav className="bg-header_bg w-full h-[40px] relative">
      <ul className="text-white flex items-center h-[40px]">
        <Link href="/">
          <motion.li
            ref={homeItemRef}
            id="0-item"
            className={`px-[20px] cursor-pointer flex items-center h-[40px] ${router.pathname === '/' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleItemClick(0)}
          >
            HOME
          </motion.li>
        </Link>
        <Link href="/privacy-policy">
          <motion.li
            id="1-item"
            className={`px-[20px] cursor-pointer flex items-center h-[40px] ${router.pathname === '/privacy-policy' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleItemClick(1)}
          >
            PrivacyPolicy
          </motion.li>
        </Link>
        {barWidth !== null && (
          <motion.div
            className="bg-red-500 h-1 mt-1 absolute bottom-0 left-0"
            style={{ width: barWidth }}
            animate={controls}
            transition={{ duration: 0.3 }}
          />
        )}
      </ul>
    </nav>
  );
};

export default Nav;