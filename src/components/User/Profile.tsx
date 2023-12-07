import { useState, useEffect } from 'react';
import { updateProfile as updateAuthProfile ,User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/fb_client';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('名無しさん');
  const [introduction, setIntroduction] = useState('よろしくお願いします');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser as User);

        const userRef = doc(db, 'users', authUser.uid);

        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.displayName || '名無しさん');
          setIntroduction(userData.introduction || 'よろしくお願いします');
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = async () => {
    try {
      if (auth.currentUser) {
        await updateAuthProfile(auth.currentUser, { displayName: name });

        const userRef = doc(db, 'users', auth.currentUser.uid);

        await setDoc(userRef, {
          displayName: name,
          introduction,
        });

        setIsEditing(false);
      }
    } catch (error: any) {
      console.error('プロフィールの保存エラー:', error.message);
    }
  };

  return (
    <div className='absolute w-full h-full'>
      <div className='flex items-center h-[200px] mr-[20px]'>
        <div
          className="rounded-full bg-white w-[187px] h-[187px]"
          style={{ backgroundImage: `url(${user?.photoURL || '/default-profile-image.png'})`, backgroundSize: 'cover' }}
        ></div>
      </div>

      <div className='absolute top-0 right-0'>
        {!isEditing && (
          <button onClick={toggleEditing} className='bg-select_border w-[500px] h-[50px] rounded-[10px]'>
            編集する
          </button>
        )}
        {isEditing && (
          <button onClick={saveProfile} className='bg-remove_bg w-[500px] h-[50px] rounded-[10px]'>
            保存
          </button>
        )}
      </div>

      {isEditing && (
        <div>
          <label className='absolute top-0 left-[200px] text-[30px]'>
            <input
              value={name}
              maxLength={10}
              className='text-black w-[250px] text-[20px]'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label className='absolute top-[100px] left-[200px] text-[30px]'>
            自己紹介
            <br />
            <textarea
              value={introduction}
              maxLength={100}
              className='text-black text-[20px] w-[600px] h-[200px]'
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </label>
          <br />
        </div>
      )}

      {!isEditing && (
        <div>
          <div className='absolute top-0 left-[200px] text-[30px]'>{name}</div>
          <p className='absolute top-[100px] left-[200px] text-[30px] w-[600px] h-[200px]' style={{ whiteSpace: 'pre-line' }}>
            自己紹介
            <br />
            <span className='text-[20px]'>{introduction}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;