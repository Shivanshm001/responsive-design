import React from "react";
import LikeIcon from "../../../../assets/images/KicksLike.png";
import LikedProfile from "./LikedProfile";
import { RxCrossCircled } from "react-icons/rx";
const LikeModal = ({ closeLikeModal }) => {
  return (
    <div className="w-[30%] h-[74%] bg-white rounded-lg px-4 flex flex-col gap-2 pt-2">
      <div className="flex w-full  items-center">
        <div className="flex-1 gap-1 items-center flex justify-center">
          <img src={LikeIcon} alt="" className="w-[30px] h-[30px]" />
          <h1>7 Likes</h1>
        </div>
        <RxCrossCircled
          size={20}
          className="cursor-pointer"
          onClick={closeLikeModal}
        />
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="w-full h-full overflow-y-scroll">
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={"Cancel Requested"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={"Cancel Requested"} />

        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={"Cancel Requested"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
        <LikedProfile title={" Add Friends"} />
      </div>
    </div>
  );
};

export default LikeModal;
