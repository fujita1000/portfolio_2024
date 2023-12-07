// components/Post/PostCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import PostModal from "./PostModal";

type PostCardProps = {
  post: any;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createdDate = post.sys.createdAt;
  const createdDateResults = createdDate.split("T")[0];
  const updateDate = post.sys.updatedAt;
  const updateDateResults = updateDate.split("T")[0];
  const imageUrl = post.fields.mainImage[0].secure_url;

  return (
    <>
    <div key={post.sys.id} className="m-auto w-[95%] mt-[20px] text-center bg-gray-600 rounded-[28px]">
      <div className="relative w-full h-[150px]">
        <Image
          src={imageUrl}
          alt={post.fields.title || "ブログの画像"}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-[28px]"
          onClick={openModal} // Open modal on image click
        />
        <div className="absolute top-[10px] left-[10px] flex">
          {post.fields.languages && (
            <div className="w-[100px] h-[30px] rounded-md flex justify-center items-center m-auto bg-gray-600 mr-[10px]">
              <p className="p-2 text-white ">{post.fields.languages}</p>
            </div>
          )}

          {post.fields.database && (
            <div className="w-[100px] h-[30px] rounded-md flex justify-center items-center m-auto bg-gray-600 mr-[10px]">
              <p className="p-2 text-white ">{post.fields.database}</p>
            </div>
          )}

          {post.fields.cms && (
            <div className="w-[100px] h-[30px] rounded-md flex justify-center items-center m-auto bg-gray-600">
              <p className="p-2 text-white ">{post.fields.cms}</p>
            </div>
          )}
        </div>
      </div>

      <h2 className="my-[10px]">{post.fields.title}</h2>

      <div className="flex justify-center pb-[10px] ">
        <p className="mr-2">{createdDateResults}</p>
        <p>(更新日: {updateDateResults})</p>
      </div>
    </div>

     {isModalOpen && (
        <PostModal postTitle={post.fields.title} image={imageUrl} body={post.fields.body} postId={post.sys.id} onClose={closeModal}  />
      )}

    </>
  );
};

export default PostCard;