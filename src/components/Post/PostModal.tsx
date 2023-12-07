// components/Post/PostModal.tsx
import React, { useState } from "react";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/logic";
import { createChatRoomForPost } from "@/lib/fb_client"; // 関数のパスを正確に指定する
import ChatRoom from "./ChatRoom";

type PostModalProps = {
  postTitle: string;
  postId: string;
  body: any;
  image: any;
  onClose: () => void;
};

const PostModal: React.FC<PostModalProps> = ({ postId, postTitle, body, image, onClose }) => {
  const [showChatRoom, setShowChatRoom] = useState(false);

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCreateChatRoomClick = () => {
    // チャットルームを表示するロジック
    setShowChatRoom(true);
    createChatRoomForPost(postId, postTitle);
  };

  return (
    <>
      <div className="fixed w-screen h-screen opacity-70 bg-black z-[888] top-0 left-0" onClick={handleOverlayClick}></div>
      <AnimatePresence>
        <motion.div className="w-screen h-screen relative" {...fadeIn}>
          <div className="z-[999] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-popup_bg p-8 rounded-md shadow-lg w-[90%] h-[80%]">
            <div className="absolute top-0 left-0 w-[75%] h-[100%]">
              <Image src={image} fill style={{ objectFit: "cover" }} alt="記事の画像"></Image>
            </div>
            <div className="flex">
            <div className="w-[80%] h-[100%]"></div>             
               {showChatRoom ? (
                  <ChatRoom postId={postId} />
                ) : (
              <div className="text-white w-[25%] ">
                <div className="w-[95%] m-auto">
                  <button className="text-white" onClick={closeModal}>
                    <div className="absolute right-[30px] top-[30px]">
                      <Image src={"close.svg"} width={40} height={40} alt="close" />
                    </div>
                  </button>
                  <button onClick={handleCreateChatRoomClick} className="text-white"> <Image src={"/../comment.png"} className='absolute top-[25px] right-[100px]' width={50} height={50} alt='logo'/></button>
                  <p className="text-white mt-[50px] text-[24px] mb-[20px]">{postTitle}</p> 
                  <div className="[&>p]:text-white">{documentToReactComponents(body)}</div> 
                </div>
              </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PostModal;