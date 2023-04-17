import React from "react";
import dataList from "./data";


const BlockModal = () => {
  return (
    <div className="w-[20%] bg-white flex flex-col rounded-lg">
      <h1 className="text-center my-4 font-bold text-sm">
        Are you sure to Block ?
      </h1>
      <hr />
      <div className="w-full px-3 py-2 flex justify-center flex-col items-center my-2">
        <img src="./images/blockConfirmation.png" alt="" className="w-[50px]"/>
       <div className="flex flex-col gap-2 w-full">
        {dataList.map((elem)=>(<p className="font-semibold text-[10px]">{elem.title}</p>))}
       </div>
      </div>

      <div className="border-2 text-gray-500 w-full flex justify-center rounded-b-lg">
        <button className="bg-[#7991BD] text-white border-[1px] border-gray-500 w-[50%] rounded-bl-lg text-sm font-semibold py-1">
          Block
        </button>
        <button className="text-[#7991BD] border-[1px] border-gray-500  w-[50%] rounded-br-lg text-sm font-semibold py-1">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BlockModal;