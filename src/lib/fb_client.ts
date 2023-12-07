import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc,getDoc, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, deleteUser } from "firebase/auth";

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

console.log('API_KEY:', API_KEY);
console.log('AUTH_DOMAIN:', AUTH_DOMAIN);
console.log('PROJECT_ID:', PROJECT_ID);
console.log('STORAGE_BUCKET:', STORAGE_BUCKET);
console.log('MESSAGING_SENDER_ID:', MESSAGING_SENDER_ID);
console.log('APP_ID:', APP_ID);
console.log('MEASUREMENT_ID:', MEASUREMENT_ID);

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Firebaseの初期化
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

//ログイン機能
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    console.log("Googleでログインしました");
  } catch (error) {
    console.error("ログインエラー", error);
  }
};

//ログアウト機能
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("ログアウトしました");
  } catch (error) {
    console.error("ログアウトエラー", error);
  }
};

//退会機能
export const deleteUserAccount = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        await deleteUser(user);
        console.log("アカウント削除成功");
      } catch (error) {
        console.error("アカウント削除エラー", error);
      }
    } else {
      console.error("ユーザーが存在しません");
    }
  };


  export const createChatRoomForPost = async (postId: string, postTitle: string) => {
    const chatRoomsCollection = collection(db, 'chatRooms');
  
    try {
      // チャットルームのドキュメントを作成
      const chatRoomDocRef = doc(chatRoomsCollection, postId);
      // 既存のドキュメントがあるかどうかを確認
      const chatRoomDocSnapshot = await getDoc(chatRoomDocRef);
      if (chatRoomDocSnapshot.exists()) {
        // 既にドキュメントが存在する場合は何もせずに終了
        console.log(`Chat Room for Post "${postTitle}" already exists.`);
        return;
      }
      // ドキュメントに必要なデータをセット
      await setDoc(chatRoomDocRef, {
        title: postTitle,
        // 他に必要な情報があればここに追加
      });
  
      console.log(`Chat Room for Post "${postTitle}" created successfully.`);
    } catch (error) {
      console.error('Error creating or checking chat room:', error);
    }
  };

