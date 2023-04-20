import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import Portals from "../../Portals/Portals";
import CreatePostModal from "../Modal/CreatePostModal/CreatePostModal";

const PostForm = ({ width, bgColor }) => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const createPostModal = () => {
    setShowCreatePostModal(true);
  };
  return (
    <>
      <div
        className={`flex border-gray-400 rounded-md justify-between items-center w-[40%] h-[50px] m-auto z-10 bg-white mt-2 cursor-pointer`}
        onClick={createPostModal}
      >
        <input
          type="text"
          placeholder="Write Your Thoughts....."
          className="w-[94%] outline-none  rounded-md pl-3 py-2"
        />
        <span className="mr-2">
          <BsImage size={25} />
        </span>
      </div>
      {showCreatePostModal && (
        <Portals>
          <CreatePostModal setShowCreatePostModal={setShowCreatePostModal}/>
        </Portals>
      )}
    </>
  );
};

export default PostForm;
