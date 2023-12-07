// components/Post/ChatRoom.tsx

import React, { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, serverTimestamp, getDocs, doc, getDoc ,deleteDoc} from 'firebase/firestore';
import { db, auth } from '@/lib/fb_client';
import Link from 'next/link';
import Image from 'next/image';

type ChatRoomProps = {
  postId: string;
};

interface Message {
  id: string;
  text: string;
  userId: string | null;
  userName: string | null;
  timestamp: any;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ postId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatRoomTitle, setChatRoomTitle] = useState('');

  useEffect(() => {
    const fetchChatRoomTitle = async () => {
      const chatRoomRef = doc(db, `chatRooms/${postId}`);
      const chatRoomSnapshot = await getDoc(chatRoomRef);

      if (chatRoomSnapshot.exists()) {
        const chatRoomData = chatRoomSnapshot.data();
        setChatRoomTitle(chatRoomData.title || ''); // Use the correct field name
      }
    };

    fetchChatRoomTitle();

    const fetchMessages = async () => {
      const messagesRef = collection(db, `chatRooms/${postId}/messages`);
      const messagesSnapshot = await getDocs(messagesRef);

      if (!messagesSnapshot.empty) {
        const messagesData = messagesSnapshot.docs.map((doc) => doc.data() as Message);
        setMessages(messagesData);
      }
    };

    fetchMessages();

    const messagesRef = collection(db, `chatRooms/${postId}/messages`);
    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => {
        const data = doc.data() as Message;
        return { ...(doc.id && { id: doc.id }), ...data };
      });
      // Sort messages based on timestamp in descending order
      messagesData.sort((a, b) => b.timestamp - a.timestamp);
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [postId]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (newMessage.trim() !== '') {
        const messagesRef = collection(db, `chatRooms/${postId}/messages`);
        await addDoc(messagesRef, {
          text: newMessage,
          timestamp: serverTimestamp(),
          userId: auth.currentUser ? auth.currentUser.uid : null,
          userName: auth.currentUser?.displayName || null,
        });

        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  const handleDeleteMessage = async (messageId: string) => {
    try {
      const messageRef = doc(db, `chatRooms/${postId}/messages/${messageId}`);
      console.log('Deleting message with ID:', messageId); // ログ追加
      await deleteDoc(messageRef);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };



  return (
    <>
    <div className="h-[350px] overflow-y-auto border border-gray-300 p-4 rounded-md"> {/* Set maximum height and enable vertical scrolling */}
      <h1 className="text-white">【{chatRoomTitle}】の掲示板</h1>
      <div className='my-[20px]'>
        {messages.map((message, index) => (
          <div key={index}>
            <p className='mt-[20px]'>氏名: {message.userName}(id: {message.userId && `${message.userId.substring(0, 6)}...`})</p>
            <p>{message.text}</p>
            {auth.currentUser?.uid === message.userId && (
              <button onClick={() => handleDeleteMessage(message.id)}>
                <Image src={"gomi_w.svg"} width={20} height={20} alt='messageDelete'/>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className='pt-[20px]'>
    {!auth.currentUser && <><p className='text-white'><Link href={"/mypage"} className="text-blue-600">ログイン</Link>するとメッセージ送信ボタンが表示されます</p></>}
      {auth.currentUser && (
        <div className='relative'>
        <form onSubmit={handleSendMessage}>
          <textarea
            value={newMessage}
            className='h-[50px] w-[75%]'
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className='absolute bottom-[0px] right-[10px] z-[20]'>
          <button type="submit" className='text-black'><Image src={"/submit.png"} width={50} height={20} alt='送信ボタン'></Image></button>
          </div>
        </form>
        </div>
      )}
      </div>
    </>
  );
};

export default ChatRoom;