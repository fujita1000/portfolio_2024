import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Database = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const starArray = [ "★","★"]; 

  return (
    <>
      <div>
        <motion.div
          className="main-box bg-header_bg border border-skills_border hover:opacity-60 text-white flex items-center pl-[30px] relative"
          onClick={toggleDropdown}
          initial={{ width: '100%', height: '70px' }}
        >
          <p className='text-[35px]'>DataBase</p>
          <div className=" absolute right-[30px]">
            <Image src={"/down.svg"} width={42} height={42} alt='ドロップダウンアイコン'/>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="dropdown-box"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {["MongoDB", "firebaseStore"].map((item, index) => (
                <div key={item} className='flex'>
                  <motion.div
                    className="dropdown-item bg-select_bg border border-white h-[50px] w-[75%] [&>p]:text-white [&>p]:text-[24px] flex items-center pl-[30px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p>{item}</p>
                  </motion.div>
                  <motion.div
                    key={index}
                    className="dropdown-item bg-select_bg border border-white h-[50px] w-[25%] flex items-center justify-center text-white [&>p]:text-[35px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p>{starArray[index]}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Database;