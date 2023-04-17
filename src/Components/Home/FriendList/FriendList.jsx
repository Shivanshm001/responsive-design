import React, { useState } from "react";
import CommentMenuModal from "../Modal/CommentMenuModal/CommentMenuModal";

const FriendList = ({ icon, desc }) => {
  const data = [
    { name: "Un-Friend" },
    { name: "Change Relationship" },
    { name: "Block" },
  ];
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const onMenuClick = () => {
  console.log("openMenuModal11",openMenuModal);

    setOpenMenuModal(!openMenuModal);
  };

  return (
    <div className="flex h-[50px] px-4 items-center py-2 relative">
      {openMenuModal && <CommentMenuModal data={data} leftPosition={50} topPosition={34}/>}
      <div className="">
        <img
          src="./images/events.jpg"
          alt=""
          className="w-[45px] h-[45px] rounded-full"
        />
      </div>
      <div className=" flex flex-1 flex-col justify-center ml-2">
        <h1 className="font-bold">Elisa K</h1>
        {desc && (
          <p className="text-[10px] font-bold text-gray-500">
            Hi Joe.........will plan this week
          </p>
        )}
      </div>
      {icon ? (
        <div className="flex gap-2 items-center cursor-pointer"
        onClick={onMenuClick}>
          <img
            src="./images/groups.png"
            alt=""
            className="w-[30px] h-[30px]"
           
          />
        </div>
      ) : null}
    </div>
  );
};

export default FriendList;